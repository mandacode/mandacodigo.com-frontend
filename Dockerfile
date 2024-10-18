FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN curl -o /usr/src/app/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh

RUN chmod +x /usr/src/app/wait-for-it.sh

EXPOSE 3000

CMD ["./wait-for-it.sh", "backend:8000", "--", "npm", "start"]
