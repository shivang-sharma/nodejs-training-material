const express = require('express');

const app = express();

/**
 * /api/users => [func1]
 * middleware => [loggingMiddleware, loggingMiddleware]
 * /api/products => [loggingMiddleware, loggingMiddleware, authenticationMiddleware, func1]
 */
app.use(loggingMiddleware);
app.use('/api/auth/', authenticationMiddleware);

app.get('/api/users', (req, res, next) => {
    res.status(200).json({"users": ['user1', 'user2', 'user3']});
    res.end();
});

app.get('/api/auth/cart', (req, res, next) => {
    res.status(200).json({
        "items": [
            {"id":101,"name": "Product1", "price":1232, "qty": 2},
            {"id": 102,"name": "Product2", "price":132, "qty": 1},
        ]
    });
    res.end();
});

app.get('/api/auth/products', (req, res, next) => {
    res.status(200).json({
        "products": [
            {"id":101, "name":"Product1", "price": 1232, "stock":10},
            {"id": 102, "name":"Product2", "price": 132, "stock":3}
        ]
    });
    res.end();
});

app.get('/api/products/:id', (req, res, next) => {
    res.status(200).json({
        "id":req.params.id,
        "name":"Product1",
        "price": 1232,
        "stock":10
    });
    res.end();
});

function loggingMiddleware(req, res, next) {
    console.log("Request base url : ", req.path);
    next();
}
function authenticationMiddleware(req, res, next) {
    const auth  = req.query.auth;
    console.log(auth);
    if (auth == "true") {
        next();
    } else {
        res.status('401').json({"message": "not logged in"});
    }
}
app.listen(3000, () => {
    console.log("Server started on 3000");
})