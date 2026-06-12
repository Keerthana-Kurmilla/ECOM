const mongoose = require('mongoose');

const connectDb = async () => {
    const connectionCandidates = [
        process.env.MONGOURL,
        process.env.LOCAL_MONGOURL || 'mongodb://127.0.0.1:27017/dummyshow'
    ].filter(Boolean)

    let lastError = null

    for (const uri of connectionCandidates) {
        try {
            await mongoose.connect(uri, {
                serverSelectionTimeoutMS: 5000
            })
            console.log('mongodb connected')
            return true
        } catch (error) {
            lastError = error
        }
    }

    console.error('MongoDB connection failed. Set MONGOURL to a reachable Atlas URI or LOCAL_MONGOURL to a local MongoDB instance.')
    if (lastError) {
        console.error(lastError.message)
    }

    return false
}

module.exports = connectDb