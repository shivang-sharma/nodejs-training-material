const passport = require('passport');
const { userExists } = require('../middleware/middleware');
const { genPassword } = require('../util/util');
const connection = require('../db/db');

function createRouter(dirname) {
    const router = require('express').Router();
    
    router.get('/login', (req, res, next) => {
        res.sendFile(dirname + '/login.html');
    });
    router.get('/logout', (req, res, next) => {
        req.logout((err) => {
            if (err) {
                console.log(err);
            }
        }); //deletes the user from the session
        res.redirect('/');
    });
    router.get('/login-failure', (req, res, next) => {
        res.send('You entered the wrong username or password.');
    });
    
    router.get('/register', (req, res, next) => {
        console.log("Inside get");
        res.sendFile(dirname + '/register.html');
    });
    
    router.post('/register', userExists, (req,res,next)=>{
        console.log("Inside post");
        const username = req.body.username;
        const password = req.body.password;
        const isAdmin = req.body.admin === "on"? 1: 0;
        console.log(password);
        const saltAndHash = genPassword(req.body.password);
        console.log(saltAndHash);
        const salt = saltAndHash.salt;
        const hash = saltAndHash.hash;
    
        connection.query('Insert into users(username,hash,salt,isAdmin) values(?,?,?,?) ', [username , hash, salt, isAdmin], function(error, results, fields) {
            if (error) {
                console.log("Error");
            } else {
                console.log("Successfully Entered");
            }
        });
    
        res.redirect('/login');
    });
    
    router.post('/login', passport.authenticate('local', {
        failureRedirect:'/login-failure',
        successRedirect:'/login-success'
    }));
    
    router.get('/notAuthorized', (req, res, next) => {
        console.log("Inside get");
        res.send('<h1>You are not authorized to view the resource </h1><p><a href="/login">Retry Login</a></p>');
        
    });
    router.get('/notAuthorizedAdmin', (req, res, next) => {
        console.log("Inside get");
        res.send('<h1>You are not authorized to view the resource as you are not the admin of the page  </h1><p><a href="/login">Retry to Login as admin</a></p>');
        
    });
    router.get('/userAlreadyExists', (req, res, next) => {
        console.log("Inside get");
        res.send('<h1>Sorry This username is taken </h1><p><a href="/register">Register with different username</a></p>');
        
    }); 
    return router;   
}


module.exports = createRouter;

