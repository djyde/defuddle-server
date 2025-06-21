# Defuddle API

A Node.js API service that provides web content parsing capabilities using the [Defuddle](https://github.com/kepano/defuddle/) library. Built with [Hono](https://hono.dev/) framework.

## Features

- Parse and extract content from web pages
- Support for both URL fetching and direct HTML input
- Configurable parsing options
- API key authentication support

## Build and run

```bash
pnpm install
npm run build
npm start
```

## Development

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Environment Variables

- `PORT` - Server port (default: 3000)
- `API_KEY` - Optional API key for authentication
  - If set, the API key must be provided in the `x-api-key` header

## API

### POST /api/parse

#### Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | URL of the web page to parse |
| `html` | string | No | Raw HTML content to parse. If provided, will fetch the HTML from the URL and parse it |
| `removeImages` | boolean | No | Remove images from the HTML before parsing |
| `defuddleOptions` | object | No | Additional options to pass to the Defuddle parser. See [Defuddle options](https://github.com/kepano/defuddle) |
