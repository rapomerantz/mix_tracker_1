const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const tableName = 'songs';

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(`SELECT * FROM ${tableName} WHERE user_id = $1`, [id], (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).json(result.rows)
    })
})

module.exports = router;