FROM node:25-alpine3.23 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:25-alpine3.23

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package-prod.json ./package.json

COPY --from=build /app/public/cards.json ./public/cards.json

RUN npm install 

EXPOSE 5173 3002

CMD ["npm", "run", "serve"]

