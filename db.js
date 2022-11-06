const mongoose = require("mongoose")
require("dotenv").config()



const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

module.exports = function connectToMongoDB(){
    mongoose.connect(MONGO_DB_CONNECTION_URL)

    mongoose.connection.on('connected',()=>{
        console.log("Connected to MongoDB Succesfully")
    })
    mongoose.connection.on('error',(err)=>{
        console.log(err)
        console.log('An error has occured')
    })

}

