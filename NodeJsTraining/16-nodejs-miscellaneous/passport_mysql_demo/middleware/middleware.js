const connection = require('../db/db');
const session = require('express-session');
const MySQLStore  =require('express-mysql-session')(session);
/**
 * It checks whether the username is already in the database. 
 * If the username exists it will redirect to /userAlreadyExists
 * route or else it will successfully register the user and it 
 * will then redirect to the /login route
 * 
 */
exports.userExists = function(req,res,next) {
    connection.query('Select * from users where username=? ', [req.body.username], function(error, results, fields) {
        if (error) {
            console.log("Error");
        } else if(results.length>0) {
            res.redirect('/userAlreadyExists')
        } else {
            next();
        }
    });
}


/**
 * It verifies whether the user is an admin. This is simply for role 
 * checking and can be improved by adding more logic. Here I am just checking 
 * whether the req.user.isAdmin==1 . I have stored the isAdmin property in my
 * MySQL database which can take 0 or 1. If it returns false it will redirect 
 * to /notAuthorizedAdmin route.
 */
exports.isAdmin = function(req,res,next) {
    if(req.isAuthenticated() && req.user.isAdmin==1) {
        next();
    } else {
        res.redirect('/notAuthorizedAdmin');
    }   
}

/**
 * Method It verifies whether the user is authenticated. 
 * The request object would have isAuthenticated() method
 * defined by the passport.js that will check whether 
 * the user is authenticated or not. If it returns false it will
 * redirect to /notAuthorized route.
 */
 exports.isAuth = function(req,res,next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/notAuthorized');
    }
}


exports.sessionMiddleware = session({
    key: 'sessionId',
    secret: 'session_secret',
    store: new MySQLStore({
        port     :  3306,
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'session_store'
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60
    }
})