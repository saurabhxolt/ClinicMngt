// MSSQL connection pool
const sql = require('mssql');

let pool;
exports.getPool = async () => {
  if (!pool) {
    pool = await sql.connect(process.env.SQL_CONNECTION_STRING);
  }
  return pool;
};
