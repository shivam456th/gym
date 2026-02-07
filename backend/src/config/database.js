const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
        const dbURL = process.env.MONGODB_URI || "mongodb://localhost:27017/gym";
        dbURL
    );
};

module.exports = connectDB;