const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/teachers')
})

routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create-teacher')
})

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)



// edit
// routes.get('teachers/id/edit', teachers.edit)


routes.post('/teachers', teachers.post)

module.exports = routes