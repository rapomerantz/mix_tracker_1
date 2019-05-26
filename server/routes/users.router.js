const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const tableName = 'users';


router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(`SELECT * FROM ${tableName} WHERE user_id = $1`, [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(res.rows)
    })
})

module.exports = router;