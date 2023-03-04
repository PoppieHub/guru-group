FROM alpine:3.16

ENV NODE_VERSION 18.11.0

WORKDIR /data/guru-group.client/

VOLUME /data

RUN apk add --update npm

COPY . /data/guru-group.client/

RUN npm ci

CMD npm run build
CMD npm run start