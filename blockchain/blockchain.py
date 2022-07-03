import datetime, hashlib, json

# class for a single block
class Block:

    def __init__(self, data, previousBlock):

        # this is for the initial block
        if previousBlock == None:
            self.blockNumber = 0
            self.blockHash = 0
        
        else:
            self.blockNumber = previousBlock.blockNumber + 1
            self.previousHash = previousBlock.blockHash
        
        self.timeStamp = str(datetime.datetime.now())
        self.data = data
        self.blockHash = hash(self)

    # function to hash the block
    def hash(self):
        encodedBlock = json.dumps(self,sort_keys=True).encode()
        return hashlib.sha256(encodedBlock).hexdigest()
    
    # makes the block JSON readable
    def toJson(self):
        obj = json.dumps(self, default=lambda o: o.__dict__)
        obj = json.loads(obj)
        return(obj)


# whole blockchain class
class Blockchain:

    # upon init the blockchain intiates
    def __init__(self):
        self.chain = []
        data = {
            'message' : 'Initial block'
        }
        initBlock = Block(data=data, previousBlock=None)
        self.addNextBlock(initBlock)

    # this adds the next block to the blockchain
    def addNextBlock(self, block):
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
            if block.previousHash != self.hash(previousBlock):
                return False

            previousBlock = block
            blockIndex += 1
        
        return True
    
    # creation of a new block
    def createBlock(self,data):
        newBlock = Block(previousBlock=self.previousBlock(), data=data)
        return newBlock
    
    # display parts of the chain
    def displayChain(self, chain):
        chainSegment = []
        for block in chain:
            chainSegment.append(block.toJson())
        
        return chainSegment