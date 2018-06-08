import mysql from 'mysql2';

export const pool = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '123456',
  database        : 'blog',
  port: 3306,
  waitForConnections: true
});

export const query =  (sql, values) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        reject( {status: 500, message: err} )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( {status: 400, message: err} )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
};
