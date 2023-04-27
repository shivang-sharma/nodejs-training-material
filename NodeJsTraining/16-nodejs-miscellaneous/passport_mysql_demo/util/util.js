const crypto = require('crypto');
/**
* Method is used to encrypt the password. 
* It first uses the crypto package to generate a cryptographic salt.
* Then we use crypto to generate a hash for the password using the 
* cryptographic salt. This method is called during the registration of the user.
*/
exports.genPassword = function (password) {
   var salt = crypto.randomBytes(32).toString('hex');
   var genhash = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
   return {
       salt: salt,
       hash:genhash
   };
}


/**
 * Method takes in parameters hash, salt, password which we have retrieved
 * from the database. We use the salt and the password to create a new hash
 * value which is created with the password entered by the user during 
 * login and the cryptographic salt we are using. It then compares it with 
 * the hash value present in the MySQL database(created during registration).
 * If both matches then it returns true.
 */
 exports.validPassword = function(password, hash, salt) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
    return hash === hashVerify;
}
