const db = require('../config/connection');

function getAllTutorials(){
    const queryPromise = db.any(`SELECT * FROM howto`
  );
  return queryPromise; 
}

module.exports = {
    getAllTutorials
}

