# build the api with the client as static files
FROM python:3.9
WORKDIR /

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

COPY ./blockchain/requirements.txt ./requirements.txt
RUN pip install -r ./requirements.txt
COPY ./blockchain ./

ENTRYPOINT [ "flask" ]
# CMD [ "run","-d","--host=0.0.0.0","--port=5000" ]
RUN nohup flask run > log.txt 2>&1 &