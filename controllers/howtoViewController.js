function sendAll(req,res) {
    res.render('quotes', {
        howto: res.locals.howto
    });
}

// function sendOneHowto(req, res){
//     res.render('dbb')
// }

function sendCreateHowto(req,res) {
    howto = res.locals.newHowto
    res.redirect(`/dbb`);
}

// function editHowto(req,res) {
//     howto = res.locals.howto;
//     res.render(`/dbb`,{
//         howto: res.locals.howto
//     });
// }

function deleteHowto(req,res) {
    console.log('view')
    res.redirect(`/dbb`);
}
module.exports = {
    sendAll,
    sendCreateHowto,
    // editHowto,
    deleteHowto
}