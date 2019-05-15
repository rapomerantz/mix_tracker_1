//load app server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const morgan = require('morgan');
const db = require('./queries');

app.use(morgan ('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', db.getUsers);

app.get('/users/:id', db.getUserById);

app.get('/', (req, res) => {
    res.json({
        info: 'Node.js, epxress, POSTGRESS'
    })
})

//localhose:3003
app.listen(port, () => {
    console.log('Server is up an listening on port ', port)
});


// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var userRouter = require('./routes/user.router');
// var port = process.env.PORT || 5000;

// /** ---------- MIDDLEWARE ---------- **/
// app.use(bodyParser.json()); // needed for angular requests
// app.use(express.static('build'));

// /** ---------- EXPRESS ROUTES ---------- **/
// app.use('/users', userRouter);

// /** ---------- START SERVER ---------- **/
// app.listen(port, function () {
//     console.log('Listening on port: ', port);
// });