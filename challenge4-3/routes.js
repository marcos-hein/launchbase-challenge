const express = require('express')
const routes = express.Router()
// const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/teachers')
})

routes.get('/teachers/create-teacher', function(req, res) {
    return res.render('teachers/create-teacher')
})

routes.post('/teachers', function(req, res) {
    return res.send('Formulário enviado!')
})

module.exports = routes