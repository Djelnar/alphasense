FROM node:20-alpine

WORKDIR /usr/src/widgets

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn/ ./.yarn/

RUN yarn

COPY .storybook/ ./.storybook/
COPY tsconfig.json ./
COPY setupFile.ts ./
COPY jest.config.js ./
COPY rollup.config.js ./
COPY types.generated.ts ./
COPY src/ ./src/

RUN yarn build

EXPOSE 6006
