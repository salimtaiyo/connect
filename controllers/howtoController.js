const howtoDb = require('../models/howto');

// getting all the queries from the database table "howto" 
function getAll(req, res, next) {
    console.log('yaaaaaaaayyyyy!!! about to query the db');
    howtoDb.getAllTutorials()
    .then(data => {
        console.log('mission db accomplished hurray' + data.length + 'results');
        // the data from the table
        res.locals.howto = data;
        // console.log(data);
        next();
    })
    .catch(err => {
        next(err);
    });
}

function getOne(req,res,next){
    howtoDb.getOneHowto(req.params.id)
    .then(data => {
        res.locals.howto = data;
        next();
    })
    .catch(err => {
        next(err);
    })
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

function edit(req,res) {
    howtoDb.getOneHowto(req.params.id)
    .then(data => {
        res.locals.howto = data;
        next();
    })
    .catch(err => {
        err:err.message
    })
}

function update(req,res,next){
    req.body.id = req.params.id;
    howtoDb.updateHowto(req.body)
    .then(data => {
        res.redirect(`/dbb`)
    })
    .catch(err => {
        err:err
    })
}

function destroy(req,res) {
    console.log('deleted');
    howtoDb.deleteHowto(req.params.id)
    .then(() => {
        // res.send(`Deleted`);
        // next();
        res.redirect('/dbb');
    })
    .catch(err => {
        res.status(500).json({
            message:err.message
            // next(err);
            
        })
    })
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
}