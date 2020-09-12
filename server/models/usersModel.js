const { Pool } = require('pg');

const PG_URI = 'postgres://adspjudj:Vb64Bl0V1Z4zPoDUW7gKS2A3ubAW41Mm@lallah.db.elephantsql.com:5432/adspjudj'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};