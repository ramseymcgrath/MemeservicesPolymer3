FROM node:latest-slim

# Copy App code into containter
COPY build/* /usr/src/app

EXPOSE 8081
CMD [ "polymer", "serve" ]