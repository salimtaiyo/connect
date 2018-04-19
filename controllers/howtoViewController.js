function sendAll(req,res) {
    res.render('quotes', {
        howto: res.locals.howto
    });
}

module.exports = {
    sendAll
}