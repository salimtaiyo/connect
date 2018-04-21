const express = require('express');
// router constructor 
const router = express.Router();
const deleteRouter = express.Router();
const howtoController = require('../controllers/howtoController');
const howtoViewController = require('../controllers/howtoViewController');

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
.delete(howtoController.destroy, howtoViewController.deleteHowto)

 module.exports = {
   router,
   deleteRouter
  };