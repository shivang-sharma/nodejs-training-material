const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('../db/db');
const { validPassword } = require('../util/util');

const customFields = {
    usernameField:'username',
    passwordField:'password',
};


/**
 * Method is used by the passport.js to verify whether the user is valid or not.
 * This method is called during the login phase of the user. 
 * It gets the parameters username and password which then we have to compare
 * with the password present in the MySQL database if the user exists. 
 * For comparison purpose we use validPassword() method.
 */
function verifyCallback(username, password, done) {
   
    connection.query('SELECT * FROM users WHERE username = ? ', [username], function(error, results, fields) {
        if (error) {
            return done(error);
        }
        if(results.length==0) {
            return done(null,false);
        }
        const isValid = validPassword(password,results[0].hash,results[0].salt);
        user = {
            id:results[0].id,
            username:results[0].username,
            hash:results[0].hash,
            salt:results[0].salt
        };
        if(isValid) {
            return done(null,user);
        } else {
            return done(null,false);
        }
   });
}

const localStrategy = new LocalStrategy(customFields, verifyCallback);
passport.use(localStrategy);

/**
 * This is used  for setting the user id as cookie in header
 */
passport.serializeUser((user, done)=>{
    console.log("inside serialize");
    done(null,user.id)
});

/**
 * This is used  for retrieving the user id from the cookie.
 */
passport.deserializeUser(function(userId, done){
    console.log('deserializeUser' + userId);
    connection.query('SELECT * FROM users where id = ?',[userId], function(error, results) {
            done(null, results[0]);    
    });
});

module.exports = passport;