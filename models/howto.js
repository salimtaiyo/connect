const db = require('../config/connection');

function getAllTutorials(){
    const queryPromise = db.any(`SELECT * FROM howto`
  );
  return queryPromise; 
}

// by id
function getOneHowto(id){
    const queryPromise = db.one(`
        SELECT * FROM howto
        WHERE id = $1`, id);
    return queryPromise;
}

// creating 
function createHowto(howto){
    const queryPromise = db.one(`INSERT INTO howto
    (name, description, direction)
    VALUES ($/name/, $/description/, $/direction/)
    RETURNING *`,
    howto);
    return queryPromise;
}

// updating 
function updateHowto(howto){
    const queryPromise = db.one(`UPDATE howto
    SET name = $/name/, description=$/description/
    WHERE id = $/id/
    RETURNING *`,
    howto);
    return queryPromise;
}

// deleting 
function deleteHowto(id){
    console.log('deletedsfsf');
    const queryPromise = db.none(`
        DELETE FROM howto
        WHERE id = $1`, id);
    return queryPromise;
}

module.exports = {
    getAllTutorials,
    getOneHowto,
    createHowto,
    updateHowto,
    deleteHowto
}

