FROM node:16

WORKDIR /my-app

COPY package.json . 

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "start"]

