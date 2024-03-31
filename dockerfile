FROM node:16-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
# COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

FROM nginx:stable-alpine

# Copy React build output to Nginx container
COPY --from=builder /app/build /usr/share/nginx/html

# Configure Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]