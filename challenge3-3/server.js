const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const courses = require("./data")

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
    return res.render("courses", { courses })
})

server.get("/course/:id", function(req, res){
    const id = req.params.id
    const course = courses.find(function(course){
        return course.id == id
    })

    if (!course) {
        return res.send("Curso não encontrado!")
    }
    
    return res.render(`course`, { course })
})

server.listen(5000, function(){
    console.log("Server is a LIVEEE")
})

server.use(function(req, res){
    res.status(404).render("not-found")
})