const Pool = require('pg').Pool;
const pool = new Pool ({
    host: 'localhost',
    database: 'mix_tracker_1',
    password: 'password',
    port: 5432
})

module.exports = pool;