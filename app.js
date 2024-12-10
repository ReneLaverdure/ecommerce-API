const dotenv = require("dotenv").config()
const express = require("express")
const app = express()

const dbConnection = require("./db/dbConnection")

const PORT = process.env.PORT || 5000

async function main() {
    try {
        await dbConnection(process.env.MONGO_URI_DEV)
        app.listen(PORT, () => {
            console.log("server listening on port: " + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

main()
