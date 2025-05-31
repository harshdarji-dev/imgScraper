# DuckDuckGo Image Search API

A simple API service that scrapes DuckDuckGo for images based on search queries.

## API Endpoints

### GET /api/images
Search for images with a query.

Query Parameters:
- `query` (required): The search term
- `limit` (optional): Number of images to return (default: 10)

Example: `GET /api/images?query=cats&limit=5`

### GET /health
Health check endpoint that returns the service status.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Deployment to fly.io

1. Install the flyctl CLI if you haven't already:
```bash
curl -L https://fly.io/install.sh | sh
```

2. Login to fly.io:
```bash
fly auth login
```

3. Launch the app:
```bash
fly launch
```

4. Deploy updates:
```bash
fly deploy
```

## Environment Variables
- `PORT`: Server port (default: 3000)
