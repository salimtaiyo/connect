const authRouter = require('express').Router();
const AuthServices = require('../auth/AuthServices');
const userViewController = require('../../controllers/usersView-controller');

authRouter.get('/', userViewController.showLoginForm)
authRouter.post('/', AuthServices.login, userViewController.handleUserProfile)

authRouter.get('/', userViewController.showRegisterForm)
authRouter.post('/', AuthServices.register, howtoViewController.handleUserProfile)

authRouter.use((err,req,res,next) => {
    console.log(err);
    res.json({error:err});
})

module.exports = {
    authRouter: authRouter
};

