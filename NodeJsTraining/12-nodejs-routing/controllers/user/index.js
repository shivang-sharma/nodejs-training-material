const userService = require('../../services/user/index')

export function getAllUserController(req, res, next) {
    const data = userService.getAllUserService();
    res.status(200).json(data);
}

export function getUserController(req, res, next) {
    const id = req.params.id
    if (!id) {
        res.status(400).json("Id missing");
    } else {
        const user = userService.getUserService(id)
        res.status(200).json(user);
    }
}

export function createUserController(req, res, next) {
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
}

export function deleteUserController(req, res, next) {
    const data = dataStore.deleteUser(req.params.id);
    res.json(data);
}