# Stage 1: Build the React/Next.js app
FROM node:20-alpine AS builder
WORKDIR /app

ARG NODE_ENV=prod

COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build:${NODE_ENV} 

# Stage 2: Serve with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Adjust folder to match export output
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
