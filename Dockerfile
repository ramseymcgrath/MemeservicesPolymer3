FROM node:8

# Copy App code into containter
COPY build/* .

EXPOSE 8081
CMD [ "polymer", "serve" ]