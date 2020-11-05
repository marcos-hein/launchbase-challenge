// const { age, graduation, date } = require('../utils')
const Teacher = require("../models/Teacher")

module.exports = {
    index(req, res) {
        Teacher.all(function(teachers) {
            return res.render('teachers/teachers', { teachers })
        })

    },
    create(req, res) {
        return res.render('teachers/create-teacher')
    },
    post(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == ""){
                return res.send('Please, fill all fields!')
            }
        }

        let { avatar_url, name, birth, schooling, type_of_class, services } = req.body

        birth = Date.parse(birth)
        const created_at = Date.now()
        const id = Number(data.teachers.length + 1)


        data.teachers.push({
            id,
            avatar_url,
            name,
            birth,
            schooling,
            type_of_class,
            services,
            created_at
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) {
                return res.send('Write file error!')
            }

            return res.redirect('/teachers')
        })
        
        // return res.send(req.body)
    },
    show(req, res) {
        const { id } = req.params

        const foundTeacher = data.teachers.find(function(teacher) {
            return teacher.id == id
        })

        if (!foundTeacher) return res.send('Teacher not found!')

        const teacher = {
            ...foundTeacher,
            age: age(foundTeacher.birth),
            schooling: graduation(foundTeacher.schooling),
            services: foundTeacher.services.split(","),
            created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
        }

        return res.render('./teachers/show', { teacher })
    },
    edit(req, res) {
        const { id } = req.params

        const foundTeacher = data.teachers.find(function(teacher) {
            return teacher.id == id
        })

        if (!foundTeacher) return res.send('Teacher not found')

        const teacher = {
            ...foundTeacher,
            birth: date(foundTeacher.birth)
        }


        return res.render('./teachers/edit', { teacher })
    },
    update(req, res) {
        const { id } = req.body

        let index = 0
        
        const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
            if (id == teacher.id) {
                index = foundIndex
                return true
            }
        })

        if (!foundTeacher) return res.send('Teacher not found!')

        const teacher = {
            ...foundTeacher,
            ...req.body,
            birth: Date.parse(req.body.birth),
            id: Number(id)
        }

        data.teachers[index] = teacher

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if(err) return res.send('Teacher not found!')

            return res.redirect(`/teachers/${id}`)
        })
    },
    delete(req, res) {
        const { id } = req.body

        const filteredTeachers = data.teachers.filter(function(teacher) {
            return teacher.id != id
        })

        data.teachers = filteredTeachers

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Write file error!')

            return res.redirect('/teachers')
        })
    }
}