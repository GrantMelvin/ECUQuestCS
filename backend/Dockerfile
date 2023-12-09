FROM node:19

WORKDIR /app

# # Install necessary dependencies
# RUN apt-get update && \
#     apt-get install -y make gcc g++ python && \
#     rm -rf /var/lib/apt/lists/*

COPY package.json .

# Install Node.js dependencies
RUN npm install

# # Rebuild bcrypt
# RUN npm rebuild bcrypt --build-from-source=binary

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
