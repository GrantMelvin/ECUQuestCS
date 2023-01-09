FROM node:bullseye AS Production

ENV NODE_ENV=production

RUN mkdir /usr/src/api

WORKDIR /usr/src/api

COPY package.json /usr/src/api/

RUN npm install

COPY . /usr/src/api

EXPOSE 4000

CMD ["node", "index.js"]