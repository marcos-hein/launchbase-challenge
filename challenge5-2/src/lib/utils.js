const { timeStamp } = require("console")

module.exports = {
    age(timestamp) {
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
    graduation(schoolingNumber) {
        const schooling = [
            "Ensino Médio Completo",
            "Ensino Superior Completo",
            "Mestrado",
            "Doutorado"
        ]

        const position = schoolingNumber - 1

        return schooling[position]
    },
    grade(schoolYear) {
        const schoolYears = {
            1: "5º Ano do Ensino Fundamental",
            2: "6º Ano do Ensino Fundamental",
            3: "7º Ano do Ensino Fundamental",
            4: "8º Ano do Ensino Fundamental",
            5: "9º Ano do Ensino Fundamental",
            6: "1º Ano do Ensino Médio",
            7: "2º Ano do Ensino Médio",
            8: "3º Ano do Ensino Médio",
        }

        for (const option in schoolYears) {
            if (option == schoolYear) {
                return schoolYears[option];   
            }
        }  
    },
    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        
        return {
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
}