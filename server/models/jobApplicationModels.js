const { Pool } = require('pg');
const config = require('config');

const PG_URI = config.get('PG_URI');

// get connection string

const pool = new Pool({
  // pass in connection string
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
