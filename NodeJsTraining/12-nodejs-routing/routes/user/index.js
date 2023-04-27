const express = require('express');

const userController = require('../../controllers/user/index');
const router = express.Router();


router.get('/', userController.getAllUserController);
router.get('/:id', userController.getUserController);

router.post('/', userController.createUserController);

router.delete('/:id', userController.deleteUserController);

export {router}