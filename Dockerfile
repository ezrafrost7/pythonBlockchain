# build the react front end
FROM node:18-alpine as build
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY /frontend/package.json ./
COPY ./frontend/src ./src
RUN npm install
COPY ./frontend ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /frontend/build /frontend/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# build the api with the client as static files
FROM python:3.9
WORKDIR /

RUN mkdir ./api
COPY ./requirements.txt api/requirements.txt
RUN pip install -r ./api/requirements.txt
COPY ./app.py ./api
COPY ./blockchain/blockchain.py ./api/blockchain
ENV FLASK_APP=api/app.py

ENTRYPOINT [ "flask" ]
CMD [ "run","--host=0.0.0.0","--port=5000" ]