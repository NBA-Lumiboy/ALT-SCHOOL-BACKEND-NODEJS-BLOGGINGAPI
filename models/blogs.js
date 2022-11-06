const { time } = require("console")
const mongoose = require("mongoose")
const { stringify } = require("querystring")
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    read_count:{
        type:Number,
    },
    reading_time:{
        type:Number,
    },
    tags:{
        type: String
    },
    body:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

BlogSchema.pre('save',async(next)=>{})

const BlogsModel = mongoose.model("blogs", BlogSchema)
module.exports = BlogsModel