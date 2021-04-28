const express = require('express');
const pool = require('../modules/pool').default;
const router = express.Router();

router.get('/', (req, res) => {
  const queryString = `SELECT * FROM events;`;

  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
