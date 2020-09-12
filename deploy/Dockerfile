FROM nginx:alpine
RUN cp -r build/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]