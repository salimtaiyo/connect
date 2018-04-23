
const bcrypt = require('bcrypt');
const userDb = require('../../models/howto');

function login(req,res,next) {
    let user;
    const loginAttempt = {
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
    }
    userDb.findUser(loginAttempt.uname)
    .then(userInfo => {
        user = userInfo
        return bcrypt.compareSync(loginAttempt.password, userInfo.password)
    })
    .then(isValidPass => {
        if(!isValidPass) {
            throw {
                message: 'Incorrect'
            }
        }
        req.session.user = user;
        next();
    })
    .catch(err => {
        next(err);
    })
}

function logout(req,res,next) {
    req.session.destroy(err => next(err));
}

function register(req,res,next){
    const salt = parseInt(process.env.SALT);
    const hash = bcrypt.hashSync(req.body.password,salt);
    const user = {
        uname: req.body.uname,
        email: req.body.email,
        password: hash
    }

    userDb.createUser(user)
    .then(user => {
        if(!user) {
            throw {
                message: 'Incorrect'
            }
        }

        req.session.user = user;
        next();
    })
    .catch(err => {
        next(err);
    })
}

module.exports = {
    login,
    logout,
    register,
    loginRequired: [
        (req,res,next) => next(!req.session.user || null),
        (err,req,res,next) => res.sendStatus(401),
    ]
}