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

// URI = postgres://ejeyuixh:1Wh51hOJ_NzPFm2z8Cax4xMdEtsf6sCc@kashin.db.elephantsql.com/ejeyuixh
// mine = postgres://kpuyyule:1EVo9iLcfUKNan6rL1zrH5EREusK5dnX@kashin.db.elephantsql.com/kpuyyule
const PG_URI =
  'postgres://kpuyyule:1EVo9iLcfUKNan6rL1zrH5EREusK5dnX@kashin.db.elephantsql.com/kpuyyule';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
