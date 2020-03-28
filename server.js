const fetch = require("node-fetch");

module.exports = {
  
  // user function to fetch user info
  user: function(user) {
    return new Promise((resolve, reject) => {
      
      // see if username args is undefined or not a string
      if (user == undefined || user == "" || typeof user != "string") {
        // Request gets rejected
        reject("Invalid user argument. Must be a string.");
      } else {
        // fetch from the Glitch API
        fetch(`https://api.glitch.com/v1/users/by/login?login=${user}`)
          .then(res => res.json())
          .then(resolve)
          .catch(reject);
      }
      
    });
  },
  
  team: function(team) {
    return new Promise((resolve, reject) => {
      
      // check if team arg is undefined or invalid or not a string
      if (team == undefined || team == "" || typeof team != "string") {
        // REJECTED!!!
        reject("Invalid team name! Must be a string.");
      } else {
        fetch(`https://api.glitch.com/v1/teams/by/url?url=${team}`)
          .then(res => res.json())
          .then(resolve)
          .catch(reject);
      }
      
    });
  },
  
  collection: function(user, collection) {
    return new Promise((resolve, reject) => {
    
      // check if any of the args is not what I need
      if (user == undefined || collection == undefined || user == "" || collection == "" || typeof user != "string" || typeof collection != "string") {
        // DOUBLE REJECTED!!!
        reject("Invalid arguments for user name and collection!");
      } else {
        // convert args to lower case
        let user = user.toLowerCase();
        let collection = collection.toLowerCase();
        
        // loop through usernames and replace spaces with hyphens
        var i = 0;
        var strLength = user.length;
        for(i; i < strLength; i++) {
         user = user.replace(" ", "_");
        }
        
        // loop through collection names and replace them with hyphens
        var i = 0;
        var strLength = collection.length;
        for(i; i < strLength; i++) {
         collection = collection.replace(" ", "_");
        }
        
        // fetch from API
        fetch(`https://api.glitch.com/v1/collections/by/fullUrl?fullUrl=${user}%2F${collection}`)
          .then(res => res.json())
          .then(resolve)
          .catch(reject);
      }
  
    });
  }
                    
};
