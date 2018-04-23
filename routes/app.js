const express = require('express');
// router constructor 
const router = express.Router();
const deleteRouter = express.Router();
const updateRouter = express.Router();
const howtoController = require('../controllers/howtoController');
const howtoViewController = require('../controllers/howtoViewController');

// user authentication 
const userRouter = require('express').Router();
const AuthService = require('../services/auth/AuthServices');
const userViewController = require('../controllers/howtoViewController');

userRouter.get('/profile', AuthService.loginRequired,(req,res) =>{ 
  res.json(req.session);
});

function sendError(err, req, res, next) {
    console.log('I send errors');
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  }
router.get('/', (req,res) => {
    res.render('../views/home');
 });
 
router.route('/dbb')
.get(howtoController.getAll, howtoViewController.sendAll, sendError)
.post(howtoController.create, howtoViewController.sendCreateHowto, sendError)


deleteRouter.route('/:id')
.put(howtoController.update)
.delete(howtoController.destroy, howtoViewController.deleteHowto)

updateRouter.route('/:id/edit')
.get(howtoController.getOne, howtoViewController.editHowto)

 module.exports = {
   router,
   userRouter,
   deleteRouter,
   updateRouter
  };