const db = require("../../config/db")

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM students`, function(err, results) {
            if(err) throw `Database error! ${err}`

            callback(results.rows)
        })
    }
}