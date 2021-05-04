FROM node:14
WORKDIR /client
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]