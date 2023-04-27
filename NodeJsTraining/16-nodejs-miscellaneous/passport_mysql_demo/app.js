const passport = require('./passportjs/index');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createAuthRouter = require('./routes/auth');
const createAppRouter = require('./routes/routes');
const { sessionMiddleware } = require('./middleware/middleware')

/**
 * We need a way to store user data between HTTP requests and sessions
 * helps us to do so.When a user visits our site, it creates a new session
 * for the user and assigns them a cookie. Next time the user comes to the site
 * the cookie is checked and the session id which is stored in the cookie is
 * retrieved and searched in the session store. Session store is a place where
 * you store all our data regarding your session. Here we are using MySQL as
 * the place where we can store sessions. So we need to create database named
 * as ‘session_store’ in MySQL.
 * The table will be automatically created when the server side code is run.
 */

app.use(sessionMiddleware);


/**
 * This is used to initialize the passport.js whenever a 
 * route request is called.
 */

app.use(passport.initialize());


/**
 * This acts as a middleware to alter the request object and 
 * change the ‘user’ value that is currently the 
 * session id (from the client cookie).
 */
app.use(passport.session());

/**
 * Responsible for parsing the incoming request bodies in a middleware before 
 * you handle it.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
});
const authRouter = createAuthRouter(__dirname + "/html");
const appRouter = createAppRouter(__dirname + "/html");
app.use(authRouter);
app.use(appRouter);

module.exports = app;