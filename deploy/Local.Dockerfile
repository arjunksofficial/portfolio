FROM node as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN npm i
RUN npm run build
FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]