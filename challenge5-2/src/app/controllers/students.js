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
        return res.render('students/create-student')
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


            return res.render('./students/show', { student })
        })
    
    },
    edit(req, res) {
       Student.find(req.params.id, function(student) {
           if (!student) return res.send("Student not found!")

           student.birth_date = date(student.birth_date).iso

           return res.render('./students/edit', { student })
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
        const { id } = req.body
    
        const filteredstudents = data.students.filter(function(student) {
            return student.id != id
        })
    
        data.students = filteredstudents
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Write file error!')
    
            return res.redirect('/students')
        })
    }
}

