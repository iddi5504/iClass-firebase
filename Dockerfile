# Stage 1: Build Vue.js app
FROM node:14-alpine AS build-stage
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production=false

# Build the app
COPY . .
RUN npm run build

# Stage 2: Serve Vue.js app with Nginx
FROM nginx:1.21-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Optional: Add custom nginx config with gzip + caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
