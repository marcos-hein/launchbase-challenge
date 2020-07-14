const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    const courses = require("./data")
    return res.render("courses", { courses })
})

server.listen(5000, function(){
    console.log("Server is a LIVEEE")
})

server.use(function(req, res){
    res.status(404).render("not-found")
})