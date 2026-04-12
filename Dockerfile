# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve
FROM caddy:2-alpine

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/caddy

# Ensure the web server has read permissions for the assets
RUN chmod -R 755 /usr/share/caddy

# Copy the Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443
