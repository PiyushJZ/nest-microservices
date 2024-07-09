FROM node:20

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable pnpm

RUN pnpm install

COPY . .
