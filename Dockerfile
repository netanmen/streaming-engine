FROM node:14-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install && mv node_modules ../
COPY . .
CMD ["yarn", "start"]
