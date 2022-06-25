from flask import Flask
from flask_restful import Resource, Api, reqparse
import blockchain 
from blockchain import Blockchain, Block

app = Flask(__name__)
api = Api(app)

#create blockchain instance
blockchain = Blockchain()

# classes and endpoints are written in here
class chain(Resource):

    # the get request
    def get(self):
        data = blockchain.previousBlock()
        return {'data':data}, 200


# add resources to the api
api.add_resource(chain, '/chain')


# run the flask app
if __name__ == '__main__':
    app.run()