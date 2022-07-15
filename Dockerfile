# build the react front end
FROM node:16-alpine as build-step
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY /frontend/package.json ./
COPY ./frontend/src ./src
RUN npm install
RUN npm build

# build the api with the client as static files
FROM python:3.9
WORKDIR /app
COPY --from=build-step /app/build ./build

RUN mkdir ./api
COPY ./requirements.txt api/api.py api/.flaskenv ./api/
RUN pip install -r ./api/requirements.txt
RUN FLASK_END production

EXPOSE 3000
WORKDIR /app/api
CMD ["gunicorn","-b",":3000","api:app"]