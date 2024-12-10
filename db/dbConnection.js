const mongoose = require("mongoose")

const dbConnection = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("successful connection to database")
    } catch (e) {
        console.log(e)
    }
}

module.exports = dbConnection
