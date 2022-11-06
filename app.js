const express = require("express")
const bodyParser = require('body-parser');
const passport = require("passport")
require("dotenv").config()
const app = express()
const connectToMongoDB = require("./db")
const AuthRouter = require("./routes/auth")
const BlogRouter = require("./routes/blogs")
const PORT = process.env.PORT
require("./authentication/auth")

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", AuthRouter)
app.use("/blogs", BlogRouter)

app.get("/",(req,res)=>{
    res.send({
        message:(" Welcome to the home page")
    })
})

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error: err.message });
});



app.listen(PORT,()=>{
    console.log(`Server succesfully started on PORT:http://localhost:${PORT}`)
})


connectToMongoDB()