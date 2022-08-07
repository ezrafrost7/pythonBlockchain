# socket and server for the blockchain network
# to kill the server manually:
# netstat -ano|findstr ":65432"
# taskkill /pid $PID /f

import ast
import socket
import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))

# importing blockchain classes and methods
from blockchain.blockchain import Blockchain

HOST = "127.0.0.1" # localhost during development
PORT = 65432
socksize = 2048

# starting the blockchain
_blockchain = Blockchain()
print('Blockchain started with genesis block:')
print(_blockchain.displayChain())

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST,PORT))
s.listen(1)
print('Server now listening')

while True:
    # when a request is recieved, a new connection is created
    conn, addr = s.accept()

    print(f'New connection from {addr[0]}:{addr[1]}')
    bytesData = conn.recv(socksize)
    dataStr = bytesData.decode('utf-8')
    data = ast.literal_eval(dataStr)

    #if that connection closes
    if not bytesData:
        break

    # how to handle recieving data
    else:
        conn.sendall(bytesData)
        # only run if the data is in dictionary format
        if type(data) == type({'data':'test'}):

            # processing the data
            # # command to shut down the server
            if data['action'] == 'killserver':
                conn.sendall(bytesData)
                print(f'Recieved {bytesData!r}')
                print('Server shutting down')
                s.close()
                sys.exit()
            
            # adding a new standard block
            if data['action'] == 'standard_block':
                blockData = {'message':'Standard Block Added'}
                newBlock = _blockchain.createBlock(data=blockData)
                _blockchain.addNextBlock(newBlock)
                print('Block added')
                print(newBlock.toJson())