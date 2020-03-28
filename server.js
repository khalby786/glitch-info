const fetch = require('node-fetch');

module.exports = {
  
  user: function (user) {
    fetch(`https://api.glitch.com/v1/users/by/login?login=${user}`)
    .then(res => res.json())
    .then(json => console.log(json));
  }
  
}