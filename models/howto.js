const bcrypt = require('bcrypt');
const db = require('../config/connection');

// user auth users table
findUser = (uname) =>{
    const queryPromise = db.one(`SELECT * FROM 
    users WHERE uname = $1`, 
    uname)
    return queryPromise;
}
// creating a user

createUser = (user) => {
    const queryPromise = db.one(`INSERT INTO users (uname, email,password)
    VALUES ($/uname/, $/email/, $(password) 
    RETURNING * `, user);
    return queryPromise;
}

// howto table
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
    findUser,
    createUser,
    getAllTutorials,
    getOneHowto,
    createHowto,
    updateHowto,
    deleteHowto
}

