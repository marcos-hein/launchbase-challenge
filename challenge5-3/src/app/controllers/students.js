// const { age, grade, date } = require('../utils')
const { grade, date } = require("../../lib/utils")
const Student = require("../models/Student")

module.exports = {
    index(req, res) {
        Student.all(function(students){
            return res.render("students/students", { students })
        })
    },
    create(req, res) {
        Student.teacherSelectOptions(function(options) {
            return res.render('students/create-student', { teacherOptions: options })
        })

    },
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send('Please, fill all fields!')
            }
        }

        Student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)    
        })

    },
    show(req, res) {
        Student.find(req.params.id, function(student) {
            if (!student) return res.send("Student not found!")

            student.birth = date(student.birth_date).birthDay
            student.school_year = grade(student.school_year)
            Student.teacherSelectOptions(function(options) {
                return res.render('students/show', { student, teacherOptions: options })
            })

            // return res.render('./students/show', { student })
        })
    
    },
    edit(req, res) {
       Student.find(req.params.id, function(student) {
           if (!student) return res.send("Student not found!")

           student.birth_date = date(student.birth_date).iso

           Student.teacherSelectOptions(function(options) {
                return res.render('students/edit', { student, teacherOptions: options })
            })

       })
    
    
    },
    put(req, res) {
        const keys = Object.keys(req.body)
        
        for(key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })

    },
    delete(req, res) {
        Student.delete(req.body.id, function() {
            return res.redirect('/students')            
        })
    }
}

