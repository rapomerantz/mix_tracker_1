let express = require('express');
let router = express.Router();
let data = [
    {id: 1, user: 'me'}
]

router.get('/', function (req, res) {
    console.log('in user get')
    res.send(data);
})

module.exports = router;