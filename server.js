const express = require('express');

// const session = require('express-session');
// const authService = require('.user/auth/AuthService');
// const authRouter = require('./user/auth/AuthRouter');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;




// app.use(session({
//     secret: app.get('superSecret'),
//     resave: false,
//     saveUnintialized: false,
// }));
app.use( express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use( express.static('public'));

const homeRoute = require('./routes/app');
// app.set('superSecret', process.env.SERVER_SECRET);
app.set('view engine', 'pug');
// main router

app.use('/', homeRoute);

app.listen(PORT, () =>{
    console.log(`this app is running in ${PORT}`);
})

