FROM node:16.19.1-alpine3.17 as builder

RUN mkdir app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npx next telemetry disable

EXPOSE 80

RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
