const mongoose = require('mongoose');
let mongodInstance = null;
let useInMemory = false;
let MongoMemoryServer;
try {
    MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
} catch (e) {
    MongoMemoryServer = null;
}

async function connectdb() {
    let uri = process.env.MONGODB_URI;
    if (!uri) {
        if (MongoMemoryServer) {
            useInMemory = true;
            mongodInstance = await MongoMemoryServer.create();
            uri = mongodInstance.getUri();
            console.log('Started in-memory MongoDB for development');
        } else {
            uri = 'mongodb://127.0.0.1:27017/jims';
        }
    }
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB at', uri);
    } catch (err) {
        console.error('MongoDB connection error:', err.message || err);
        // Re-throw so callers can decide what to do (server should probably exit)
        throw err;
    }
}

module.exports = connectdb;

module.exports._internal = {
    _mongodInstance: () => mongodInstance,
    _useInMemory: () => useInMemory,
};