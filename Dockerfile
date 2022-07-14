FROM python:3.9
RUN python3 -m venv /opt/venv

# install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY app.py .
CMD ["flask","run"]