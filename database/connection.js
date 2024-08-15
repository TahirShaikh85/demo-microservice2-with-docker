const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const Connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected")
    } catch (error) {
        console.log("Mongodb connection error: ", error);
        process.exit(1);
    }
}

module.exports = Connect;