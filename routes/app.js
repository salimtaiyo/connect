const express = require('express');
// router constructor 
const router = express.Router();

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

 module.exports = router;