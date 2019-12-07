FROM node:latest-alpine

# Copy App code into containter
COPY build/* /usr/src/app

EXPOSE 8081
CMD [ "polymer", "serve" ]