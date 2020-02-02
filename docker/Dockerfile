FROM node:latest-slim

# Copy App code into containter
COPY build/* /usr/src/app
RUN start.sh 

EXPOSE 8081
CMD [ "polymer", "serve" ]