import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Resource, Api
from blockchain.blockchain import Blockchain

app = Flask(__name__)
CORS(app)

#create blockchain instance
_blockchain = Blockchain()

# classes and endpoints are written in here
@app.route('/chain', methods=['GET','POST'])
def chain():

    # the get request
    if request.method=='GET':
        segment = _blockchain.displayChain(_blockchain.chain)
        return jsonify({"data":segment})

    # the post request
    if request.method == 'POST':
        data = _blockchain.previousBlock()
        data = data.toJson()
        return jsonify({'data':data})

@app.route('/block',methods=['GET',"POST"])
def block():

    # the get request
    if request.method == 'GET':
        newBlock = _blockchain.createBlock(
            data = {
                'message' : 'this is a new block'
            }
        )
        _blockchain.addNextBlock(newBlock)
        data = newBlock.toJson()
        return {'data':data}, 200
        
    # the post request
    if request.method == 'POST':

        data = request.data.decode()

        newBlock = _blockchain.createBlock(
            data = data
        )
        
        _blockchain.addNextBlock(newBlock)
        data = newBlock.toJson()

        return {'data':data}, 200

# run the flask app
if __name__ == '__main__':
    app.run()