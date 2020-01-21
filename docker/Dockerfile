FROM node:latest

#RUN npm install -g polymer-cli


RUN npm install -g polymer-cli --unsafe-perm

EXPOSE 8081
# Copy App code into containter
COPY Release/es5-bundled/ /usr/src/app



RUN mkdir -p /usr/src/app
COPY Release/es5-bundled/ /usr/src/app 
WORKDIR /usr/src/app

RUN npm install

CMD ["polymer", "serve"]