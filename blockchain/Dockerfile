# build the api with the client as static files
FROM python:3.9
WORKDIR /app

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

COPY ./blockchain/requirements.txt ./app/requirements.txt
RUN pip install -r ./app/requirements.txt
COPY ./blockchain ./app
ENV FLASK_APP=/app

ENTRYPOINT [ "flask" ]
CMD [ "run","--host=0.0.0.0","--port=5000" ]