# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Set build argument to specify environment (default to production)
ARG NODE_ENV=prod

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy source code and build
COPY . .

# Build the Next.js application
RUN npm run build:${NODE_ENV}

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx page and copy build output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
