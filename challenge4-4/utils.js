const { timeStamp } = require("console")

const schooling = [
    "Ensino Médio Completo",
    "Ensino Superior Completo",
    "Mestrado",
    "Doutorado"
]

module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate() ){
            age -= 1
        }

        return age

    },
    graduation: function(schoolingNumber) {
        const position = schoolingNumber - 1

        return schooling[position]
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `${date.getMonth() + 1}`.slice(-2)
        const day = `${date.getDate() + 1}`.slice(-2)

        
        return `${year}-${month}-${day}`
    }
}