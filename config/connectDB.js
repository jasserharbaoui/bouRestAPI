const mongoose = require('mongoose');

const connectdb = async()=>{

    await mongoose.connect("mongodb+srv://bouthainasd562:lm8J2UCyEoa8Bu21@cluster0.9fa7tq1.mongodb.net/myAPI")
    .then(() => {
        console.log("Connect to DB")

        // Start the server
    })
    .catch((err) => console.log(err))
}

module.exports = connectdb;