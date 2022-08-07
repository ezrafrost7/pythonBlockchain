# socket and client for blockchain network

import socket
import json

HOST = "127.0.0.1"
PORT = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST,PORT))
    data = input('What data do you want to send?\n')
    data = {
        'action' : data
    }

    # convert data into bytes
    data = json.dumps(data).encode('utf-8')

    s.sendall(data)
    data = s.recv(1024)

    print(f'recieved {data!r}')
    s.close()