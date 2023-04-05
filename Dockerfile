FROM node:lts-alpine AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
COPY tsconfig.json tsconfig.json
COPY .env .env

RUN npm run build


FROM nginx:1.23.4-alpine

COPY --from=build /build/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]