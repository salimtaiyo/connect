const howtoDb = require('../models/howto');

// getting all the queries from the database table "howto" 
function getAll(req, res, next) {
    console.log('yaaaaaaaayyyyy!!! about to query the db');
    howtoDb.getAllTutorials()
    .then(data => {
        console.log('mission db accomplished hurray' + data.length + 'results');
        // the data from the table
        res.locals.howto = data;
        console.log(data);
        next();
    })
    .catch(err => {
        next(err);
    });
}

function create(req,res,next) {
    howtoDb.createHowto(req.body)
    .then(data => {
        //newHowto??
        res.locals.newHowto = data;
        next();
    })
    .catch(err => {
        next(err);
    })
}



module.exports = {
    getAll,
    create
}