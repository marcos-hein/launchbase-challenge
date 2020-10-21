const { age, grade, date } = require('../utils')

module.exports = {
    index(req, res) {
        const students = data.students.map(function(student) {
            return {
                ...student,
                school_year: grade(student.school_year)
            }
        })
    
        return res.render('students/students', { students })
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
    
        let { avatar_url, name, email, birth, school_year, study_hours} = req.body
    
        birth = Date.parse(birth)
    
        let id = 1
        const lastStudent = data.students[data.students.length - 1]
    
        if (lastStudent) {
            id = Number(lastStudent.id) + 1
        }
    
        data.students.push({
            id,
            ...req.body,
            birth
        })
    
        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) {
                return res.send('Write file error!')
            }
    
            return res.redirect('/students')
        })
        
        // return res.send(req.body)
    },
    show(req, res) {
        const { id } = req.params
    
        const foundstudent = data.students.find(function(student) {
            return student.id == id
        })
    
        if (!foundstudent) return res.send('student not found!')
    
        const student = {
            ...foundstudent,
            birth: date(foundstudent.birth).birthDay,
            school_year: grade(foundstudent.school_year)
        }
    
        return res.render('./students/show', { student })
    },
    edit(req, res) {
        const { id } = req.params
    
        const foundstudent = data.students.find(function(student) {
            return student.id == id
        })
    
        if (!foundstudent) return res.send('student not found')
    
        const student = {
            ...foundstudent,
            birth: date(foundstudent.birth).iso
        }
    
    
        return res.render('./students/edit', { student })
    },
    update(req, res) {
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

