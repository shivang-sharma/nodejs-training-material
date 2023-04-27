const { isAdmin, isAuth } = require('../middleware/middleware');

function createRouter (dirname) {
    const router = require('express').Router();
    router.get('/', (req, res, next) => {
        console.log("/")
        res.sendFile(dirname + "/home.html");
    });
    
    router.get('/login-success', isAuth, (req, res, next) => {
        res.sendFile(dirname + '/dashboard.html');
    });
    
    router.get('/protected-route', isAuth, (req, res, next) => {
        res.sendFile(dirname + '/protected.html');
    });
    
    router.get('/admin-route', isAdmin, (req, res, next) => { 
        res.sendFile(dirname + "/admin.html");
    });    
    return router;
}

module.exports = createRouter;