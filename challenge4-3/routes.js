const express = require('express')
const routes = express.Router()
// const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res){
    return res.render('teachers/teachers')
})

routes.get('create-teacher', function(req, res) {
    return res.render('teachers/create-teacher')
})

module.exports = routes