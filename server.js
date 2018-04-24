require('dotenv').config();
const express = require('express');

const session = require('express-session');



const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const PORT = process.env.PORT || 3000;
// const authRouter = require('/services/auth/AuthRouter');

app.set('server_secret', process.env.SERVER_SECRET);
app.use(session({
    secret: app.get('server_secret'),
    resave: false,
    saveUnintialized: false,
}));

app.use( express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use( express.static('public'));
app.use(methodOverride('_method'));

const homeRoute = require('./routes/app');

app.set('view engine', 'pug');
// main router

app.use('/', homeRoute.router);
app.use('/dbb', homeRoute.deleteRouter);
// app.use('/dbb', homeRoute.updateRouter);
app.listen(PORT, () =>{
    console.log(`this app is running in ${PORT}`);
})

