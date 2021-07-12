const { Pool } = require('pg');
const config = require('config');

/*

DB Setup

PG_URI is a private variable which is not checked into source control.

To config the app with elephant db:
1 . add a config folder at the project root
2.  add a default.json file in the folder
3.  inside the default.json file add {"PG_URI": "<YOUR_DB_URI>"}

https://www.elephantsql.com/docs/index.html

*/

// Import elephant db connection string.

const PG_URI = config.get('PG_URI');

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
