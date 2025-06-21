import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { Defuddle } from 'defuddle/node';
import { JSDOM } from 'jsdom';
const app = new Hono();
app.get('/', (c) => {
    return c.text('ok');
});
app.post('/api/parse', async (c) => {
    const body = await c.req.json();
    if (process.env.API_KEY) {
        const apiKey = c.req.header('x-api-key');
        if (apiKey !== process.env.API_KEY) {
            return c.json({ error: 'Invalid API key' }, 401);
        }
    }
    let html = body.html ?? "";
    if (body.url) {
        const response = await fetch(body.url);
        html = await response.text();
    }
    const dom = new JSDOM(html);
    if (body.removeImages) {
        const images = dom.window.document.querySelectorAll('img');
        images.forEach(img => {
            img.remove();
        });
    }
    const result = await Defuddle(dom, body.url, {
        ...body.defuddleOptions
    });
    return c.json({
        result
    });
});
serve({
    fetch: app.fetch,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000
}, (info) => {
    console.log(`Server is running on port:${info.port}`);
});
