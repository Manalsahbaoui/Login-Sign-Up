const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        // Hardcoded MongoDB URL
        mongoose.connect("mongodb://127.0.0.1:27017/auth", connectionParams);
        console.log('Connected to database successfully');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database!');
    }
};