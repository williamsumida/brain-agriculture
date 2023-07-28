FROM node:18-alpine AS build
WORKDIR /api/
COPY package.json package-lock.json ./
RUN npm install -g npm@8.19.2
RUN npm install
COPY . .
COPY .env.example .env

CMD [ "npm", "run", "dev" ]

