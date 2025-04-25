const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

const { userVerifyToken } = require('../helpers/userVerifyToken');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/getAll',userVerifyToken,getAllUsers);
router.get('/getUser',userVerifyToken,getUser);
router.put('/update',userVerifyToken,updateUser);
router.delete('/delete',userVerifyToken,deleteUser);

module.exports = router