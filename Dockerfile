FROM node:10.17.0 AS build-env
WORKDIR /app 
COPY ./package*.json ./ 
RUN npm install 
COPY . . 
RUN npm run build


FROM nginx 
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-env /app/build  /usr/share/nginx/html