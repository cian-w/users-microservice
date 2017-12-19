var db = require('../../config/dbconfig.js');



module.exports = {

  // Given user details check if they are in the DB
  loginUser: function (user, callback) {
      var username = user.username;

      var query = 'SELECT password FROM Users WHERE username = "' + username + '";' ;

      db.query(query, function (err,result){
          if(result[0].password = user.password){
              result = "User Authenticated";
          } else {
              result = "Incorrect Username or Password";
          }
          callback(result);
      });

  }

};
