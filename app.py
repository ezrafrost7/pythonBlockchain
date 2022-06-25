from flask import Flask
from flask_restful import Resource, Api
from blockchain.blockchain import Blockchain

app = Flask(__name__)
api = Api(app)

#create blockchain instance
_blockchain = Blockchain()

# classes and endpoints are written in here
class chain(Resource):

    # the get request
    def get(self):
        data = _blockchain.previousBlock()
        return {'data':data.toJson()}, 200

class block(Resource):

    # the get request
    def get(self):
        newBlock = _blockchain.createBlock(
            data = {
                'message' : 'this is a new block'
            }
        )
        _blockchain.addNextBlock(newBlock)
        return {'data':newBlock.toJson()}, 200


# add resources to the api
api.add_resource(chain, '/chain')
api.add_resource(block, '/block')


# run the flask app
if __name__ == '__main__':
    app.run()