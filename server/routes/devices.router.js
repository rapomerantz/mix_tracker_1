const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const tableName = 'devices';

router.get('/:id', (req,res) => {
    let resultTemplate = {

    }
    const songId = parseInt(req.params.id)
    pool.query(`SELECT * FROM ${tableName} WHERE song_id = $1`, [songId], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
})

module.exports = router;