import json
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
from blockchain.blockchain import Blockchain

app = Flask(__name__)
api = Api(app)
CORS(app)

#create blockchain instance
_blockchain = Blockchain()

# classes and endpoints are written in here
class chain(Resource):

    # the get request
    def get(self):
        data = _blockchain.previousBlock()
        data = data.toJson()
        return {'data':data}, 200

class block(Resource):

    # the get request
    def get(self):
        newBlock = _blockchain.createBlock(
            data = {
                'message' : 'this is a new block'
            }
        )
        _blockchain.addNextBlock(newBlock)
        data = newBlock.toJson()
        return {'data':data}, 200

class segment(Resource):

    def get(self):
        segment = _blockchain.displayChain(_blockchain.chain)
        return{"data":segment}, 200


# add resources to the api
api.add_resource(chain, '/chain')
api.add_resource(block, '/block')
api.add_resource(segment, '/segment')


# run the flask app
if __name__ == '__main__':
    app.run()