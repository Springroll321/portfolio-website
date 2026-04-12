# Stage 1: Build the React/Vite app
FROM node:20-alpine AS builder   

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project and build
COPY . .
RUN npm run build

# Stage 2: Serve with Caddy
FROM caddy:latest

# Copy the production build from the previous stage
COPY --from=builder /app/dist /usr/share/caddy

# Minimal Caddyfile to automatically get HTTPS
# Copy Caddyfile into container
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Run Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
