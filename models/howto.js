const db = require('../config/connection');

function getAllTutorials(){
    const queryPromise = db.any(`SELECT * FROM howto`
  );
  return queryPromise; 
}

// creating 
function createHowto(x){
    const queryPromise = db.one(`INSERT INTO howto (name, description, direction )
    VALUES ($/id/,$/name/, $/description/, $/direction/) RETURNING *`, x);
    return queryPromise;
}

module.exports = {
    getAllTutorials,
    createHowto
}

