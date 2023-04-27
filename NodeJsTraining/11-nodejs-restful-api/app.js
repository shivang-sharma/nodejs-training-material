const express = require('express');
const dataStore = require('./dataStore');
const app = express();

app.use(express.json())

app.get('/', (req, res, next) => {
    res.status(200).json("Hello World");
})
app.get('/api/user', (req, res, next) => {
    res.status(200).json(dataStore.getAllUsers());
});

app.get('/api/user/:id', (req, res, next) => {
    res.status(200).json(dataStore.getUser(req.params.id));
});

app.post('/api/user/', (req, res, next) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    if (fName && lName && email && email.includes("@") && email.includes(".")) {
        const user = dataStore.addUser(fName, lName, email);
        res.status(201).json({
            "message": "User added succesfully",
            "user": user
        });
    } else {    res.status(400).json({"message":"Data missing"}); }
});

app.delete('/api/user/:id', (req, res, next) => {
    const data = dataStore.deleteUser(req.params.id);
    res.json(data);
})

app.get('/api/product', (req, res, next) => {
    res.status(200).json(dataStore.getAllProducts());
})
app.get('/api/product/:id', (req, res, next) => {
    const product = dataStore.getProduct(req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(200).json("Product does not exists");
    }
})
app.get('/api/cart', (req, res, next) => {
    res.status(200).json(dataStore.getCart());
})
app.post('/api/cart', (req, res, next) => {
    const id = req.body.id;
    const qty = req.body.qty;
    if (id && qty) {
        res.status(200).json(dataStore.addItemToCart(parseInt(id), parseInt(qty)));
    } else {
        res.status(200).json("Product does not exists");
    }
})
app.delete("/api/cart/:id", (req, res, next) => {
    const data  = dataStore.removeItemFromCart(req.params.id);
    res.json(data);
})

module.exports = app