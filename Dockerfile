FROM node:lts-alpine AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
COPY tsconfig.json tsconfig.json
ENV REACT_APP_CMS_API_ENDPOINT=http://cms:1337/api
# RUN echo REACT_APP_CMS_API_ENDPOINT=${REACT_APP_CMS_API_ENDPOINT} >> .env

RUN npm run build

FROM nginx:1.23.4-alpine

COPY --from=build /build/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]