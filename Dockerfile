FROM node:latest

#RUN npm install -g polymer-cli

# Copy App code into containter
RUN npm install -g polymer-cli --unsafe-perm
COPY build/* /usr/src/app
RUN start.sh 

RUN npm install -g polymer-cli --unsafe-perm

EXPOSE 8081
# Copy App code into containter
COPY Release/es5-bundled/ /usr/src/app

RUN mkdir -p /usr/src/app
COPY Release/es5-bundled/ /usr/src/app 
WORKDIR /usr/src/app

RUN npm install

CMD ["polymer", "serve"]