FROM node:20-alpine

WORKDIR /usr/src/frontend

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn/ ./.yarn/

COPY --from=alphasense_widgets /usr/src/widgets/ /usr/src/widgets/

RUN yarn

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.mts ./
COPY index.html ./
COPY src/ ./src/

RUN yarn build

EXPOSE 3000
