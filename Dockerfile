FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /frontend
WORKDIR /frontend
COPY . .

RUN \
    npm install && \
    npm run nbuild

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "nstart"]
