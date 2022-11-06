const express= require("express")
const passport = require("passport")
const BlogRouter = express.Router()
const BlogsModel = require("../models/blogs")


BlogRouter.get('/', (req, res) => {
   BlogsModel.find()
        .then(blogs => {
            res.status(200).json(blogs)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

BlogRouter.get('/:id', (req, res) => {
    const id = req.params.id
   BlogsModel.findById(id)
        .then(blog => {
            res.status(200).send(blog)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
})

BlogRouter.post('/',passport.authenticate('jwt',{session:false}), (req, res) => {
    const blog = req.body
    blog.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
   BlogsModel.create(blog)
        .then(blog => {
            res.status(201).send(blog)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})

BlogRouter.put('/:id,/:state/,/:author',passport.authenticate('jwt',{session:false}), (req, res) => {
    const id = req.params.id
    const blog = req.body
    blog.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
   BlogsModel.findByIdAndUpdate(id, blog, { new: true })
        .then(newblog => {
            res.status(200).send(newblog)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})

BlogRouter.delete('/:id',passport.authenticate('jwt',{session:false}), (req, res) => {
    const id = req.params.id
   BlogsModel.findByIdAndRemove(id)
        .then(blog => {
            res.status(200).send(blog)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
})
s
module.exports = BlogRouter

