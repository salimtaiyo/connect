function sendAll(req,res) {
    res.render('quotes', {
        howto: res.locals.howto
    });
}

function sendCreateHowto(req,res) {
    howto = res.locals.newHowto
    res.redirect(`/dbb`);
}
module.exports = {
    sendAll
}