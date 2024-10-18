FROM node:14

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN apt-get update  && \
    apt-get install -y curl && \
    curl -o /usr/src/app/wait-for-it.sh \
    https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/src/app/wait-for-it.sh
