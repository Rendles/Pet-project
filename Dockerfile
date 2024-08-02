FROM node:18-alpine as build
WORKDIR /usr/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.19
RUN cat > /etc/nginx/conf.d/default.conf <<EOF
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
  include /etc/nginx/extra-conf.d/*.conf;
}
EOF
COPY --from=build /usr/app/build/ /usr/share/nginx/html

