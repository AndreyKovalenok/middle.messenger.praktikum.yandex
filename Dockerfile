FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update && apt install -y nodejs && apt install -y npm

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "server.js" ]
