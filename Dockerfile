FROM node:23 AS build

WORKDIR /build
COPY . .
RUN npm install && npm run build

FROM nginx:alpine AS run

COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY --from=build /build/dist/ .
