// const { age, graduation, date } = require('../../lib/utils')
const db = require("../../config/db")

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM teachers`, function(err, results) {
            if(err) throw `Database error! ${err}`

            callback(results.rows)
        })
    }
}