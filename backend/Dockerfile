FROM node:20-alpine

WORKDIR /usr/src/backend

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn/ ./.yarn/

RUN yarn

COPY tsconfig.json ./
COPY webpack.config.ts ./
COPY jest.config.ts ./
COPY src/ ./src/

RUN yarn build

EXPOSE 4000
