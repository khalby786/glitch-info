const fetch = require('node-fetch');

module.exports = {
  
  user: function (user) {
    
    // check if user parameter is undefined or nothing
    if (user == undefined || user == "") {
      // give an error!
      return console.error("Enter a valid username")
    }
    
    // fetch the glitch api for username
    fetch(`https://api.glitch.com/v1/users/by/login?login=${user}`)
    .then(res => res.json())
    .then(json => console.log(json));
    
  }
  
}