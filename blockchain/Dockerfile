# Create our image based on Python 3.8
FROM python:3.8

# Set working directory and addour Flask API files
WORKDIR /blockchain
COPY . /blockchain

# Expose ports
EXPOSE 5000

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

# Install requirements using pip
RUN python -m pip install -r requirements.txt