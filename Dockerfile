FROM node:10.17.0
WORKDIR /app
COPY ./package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx 
COPY ./defalut*.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /usr/share/nginx/html