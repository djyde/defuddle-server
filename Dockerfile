FROM node:22-alpine

# Allow port to be set at build time
ARG PORT=3000
# Allow API_KEY to be set at build time (optional)
ARG API_KEY

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm i -g pnpm
RUN pnpm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Set port from build arg (can still be overridden at runtime)
ENV PORT=$PORT
# Set API_KEY from build arg (can still be overridden at runtime)
ENV API_KEY=$API_KEY

# Expose the port the app runs on (default 3000, but can be overridden)
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]
