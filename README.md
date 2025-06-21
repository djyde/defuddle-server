# Defuddle API

A Node.js API service that provides web content parsing capabilities using the [Defuddle](https://github.com/lutaonan/defuddle) library. Built with [Hono](https://hono.dev/) framework.

## Features

- Parse and extract content from web pages
- Support for both URL fetching and direct HTML input
- Optional image removal from parsed content
- Configurable parsing options
- API key authentication support

## Development Setup

### Prerequisites

- Node.js 22+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd defuddle-api

# Install dependencies
pnpm install
# or
npm install
```

### Running in Development

```bash
# Start development server with hot reload
pnpm dev
# or
npm run dev
```

The server will start on `http://localhost:3000`

### Environment Variables

- `PORT` - Server port (default: 3000)
- `API_KEY` - Optional API key for authentication

### Building for Production

```bash
pnpm build
# or
npm run build

# Start production server
pnpm start
# or 
npm start
```
