FROM node:16.19.1-alpine3.17

RUN mkdir app
WORKDIR app

copy . .

RUN rm package-lock.json

RUN npm install --legacy-peer-deps

RUN npx next telemetry disable

EXPOSE 3000

CMD "npm" "run" "dev"

#this is a dev run. Ideally it app should be served from release build
# TO DO: 
#1. Fix the app struture to relove the build errors and
#2. Uncomment the below two statements
#3. Commnet line 16 
#4. Build the image again 
#RUN npm run build
#CMD "npm" "run" "start"
