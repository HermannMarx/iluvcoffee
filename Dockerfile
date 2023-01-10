FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3456
CMD [ "node", "dist/main" ]