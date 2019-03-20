const mysql = require('mysql')
const {database} = require('../../project.config')

const pool = mysql.createPool({
  host     :  database.host,
  user     :  database.username,
  password :  database.password,
  database :  database.database
})

let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}


module.exports = {
  query
}