const {
  database
} = require('../project.config')
const mysql = require("mysql")

const pool = mysql.createPool({
  host: database.host,
  user: database.username,
  password: database.password,
  database: database.database
})

/**
 * 基础查询方法
 * @param {*} sql 
 * @param {*} values 
 */
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          err ? reject(err) : resolve(rows)
          connection.release()
        })
      }
    })
  })
}

/**
 * select
 * @param {*} table 
 * @param {*} keys 
 */
const select = (table, keys) => {
  const sql = "SELECT ?? FROM ??"
  return query(sql, [keys, table])
}

module.exports = {
  query,
  select
}