const fs = require('fs')
const data = require('../data.json')
const { age, graduation, date } = require('../utils')

exports.index = function(req, res){
    const students = data.students.map(function(student) {
        return {
            ...student,
            services: student.services.split(","),

        }
    })

    return res.render('students/students', { students })
}

// create
exports.create = function(req, res) {
    return res.render('students/create-student')
}

// post
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == ""){
            return res.send('Please, fill all fields!')
        }
    }

    let { avatar_url, name, birth} = req.body

    birth = Date.parse(birth)
    const id = Number(data.students.length + 1)


    data.students.push({
        id,
        avatar_url,
        name,
        birth
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Write file error!')
        }

        return res.redirect('/students')
    })
    
    // return res.send(req.body)
}

// show
exports.show = function(req, res) {
    const { id } = req.params

    const foundstudent = data.students.find(function(student) {
        return student.id == id
    })

    if (!foundstudent) return res.send('student not found!')

    const student = {
        ...foundstudent,
        age: age(foundstudent.birth),
    }

    return res.render('./students/show', { student })
}

// edit
exports.edit = function(req, res) {
    const { id } = req.params

    const foundstudent = data.students.find(function(student) {
        return student.id == id
    })

    if (!foundstudent) return res.send('student not found')

    const student = {
        ...foundstudent,
        birth: date(foundstudent.birth)
    }


    return res.render('./students/edit', { student })
}

// put
exports.update = function(req, res) {
    const { id } = req.body

    let index = 0
    
    const foundstudent = data.students.find(function(student, foundIndex) {
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundstudent) return res.send('student not found!')

    const student = {
        ...foundstudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(id)
    }

    data.students[index] = student

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send('student not found!')

        return res.redirect(`/students/${id}`)
    })
}

// delete
exports.delete = function(req, res) {
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