FROM node:14
WORKDIR /server
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]