# base image
FROM node:9.11-alpine

RUN npm -v

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

RUN npm install
RUN npm install -g @angular/cli@6.0.8

CMD ["/bin/sh", "/entrypoint.sh"]
