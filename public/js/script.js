const router = require('../../routes/app');

function deleteHowto(url) {
  return fetch(url, {
    method:'delete'
  }).then(res => {
    res.send('Deleted successfully')
  })
}

