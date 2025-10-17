Deploying to Railway

Quick steps to deploy this app to Railway (https://railway.app):

1. Push this repository to GitHub.
2. In Railway dashboard click New Project -> Deploy from GitHub and connect your repository.
3. Railway will detect a Node.js project. Ensure the build command is `npm install` and the start command is `npm start` (the project already defines these via `package.json` and `Procfile`).
4. Add any environment variables in Railway's dashboard (the `PORT` variable is provided automatically by Railway).
5. Deploy — Railway will build and start your service. Visit the generated URL and append `/me` to test the endpoint.

Notes:
- The app reads `process.env.PORT` and falls back to `3000` for local development.
- Use `npm run dev` locally to run with automatic reloads.
