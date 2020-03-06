# Stage 1
# stage: 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
#stage 2
FROM httpd:2.4
COPY --from=react-build /app/build/ /usr/local/apache2/htdocs/
