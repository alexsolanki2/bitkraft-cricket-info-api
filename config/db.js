const mongoose = require('mongoose');
const config = require('config');

// To clear PORT no.
// Step1: " lsof -i:5000 "
// Step 2: " kill -9 <PID> "

const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;