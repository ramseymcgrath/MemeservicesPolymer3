FROM node:8

# Copy App code into containter
COPY Memeservices .

RUN npm install
RUN polymer build
RUN polymer lint

EXPOSE 8081
CMD [ "polymer", "serve" ]