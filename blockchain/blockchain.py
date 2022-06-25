import datetime, hashlib, json

# class for a single block
class Block:

    def __init__(self, previousBlock, data):
        self.blockNumber = previousBlock.blockNumber + 1
        self.timeStamp = str(datetime.datetime.now())
        self.data = data
        self.previousHash = previousBlock.blockHash
        self.blockHash = hash(self)

    # function to hash the block
    def hash(self):
        encodedBlock = json.dumps(self,sort_keys=True).encode()
        return hashlib.sha256(encodedBlock).hexdigest()


# whole blockchain class
class Blockchain:

    # upon init the blockchain intiates
    def __init__(self):
        self.chain = []
        initBlock = {
            'blockHash' : 0,
            'blockNumber' : 0
        }
        data = {
            'message' : 'Initial block'
        }
        self.addNextBlock(initBlock, data)

    # this adds the next block to the blockchain
    def addNextBlock(self, block, data):
        self.chain.append(block)
        return block
    
    # return the previous block in the chain
    def previousBlock(self):
        return self.chain[-1]
    
    # checks validity of chain, mostly compares previous hash
    def chain_valid(self, chain):
        previousBlock = chain[0]
        blockIndex = 1

        while blockIndex < len(chain):
            block = chain[blockIndex]
            if block['previousHash'] != self.hash(previousBlock):
                return False

            previousBlock = block
            blockIndex += 1
        
        return True