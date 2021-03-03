FROM nginx:alpine
EXPOSE 3000
WORKDIR /app
COPY . .
COPY etc/nginx.conf.sample /etc/nginx/conf.d/default.conf

CMD exec /usr/sbin/nginx -g 'daemon off;'
