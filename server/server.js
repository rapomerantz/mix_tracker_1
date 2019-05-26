//load app server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const pino = require('express-pino-logger')();
const userRouter = require('./routes/users.router');
const songRouter = require('./routes/songs.router');
const deviceRouter = require('./routes/devices.router');

app.use(pino);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('/songs', songRouter);
app.use('/devices', deviceRouter);



app.listen(port, () => {
    console.log('Server is up an listening on port ', port)
});