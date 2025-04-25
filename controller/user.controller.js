const UserServices = require('../services/user.service');
const userServices = new UserServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res) => {
    try {
        let user = await userServices.getUser({email : req.body.email});

        if(user) {
            return res.status(400).json({message : `Email is already registered.....`});
        }

        let hashPassword = await bcrypt.hash(req.body.password,10);
        console.log(hashPassword);

        user = await userServices.addUser({...req.body,password : hashPassword});

        res.status(201).json({user,message : `user register successfully.............`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error...........${error.message}`})
    }
};

exports.loginUser = async(req,res) => {
    try {
        let user =  await userServices.getUser({email : req.body.email});

        if(!user) {
            return res.status(404).json({message : `User is not found........`});
        }

        let checkPassword = await bcrypt.compare(req.body.password, user.password);

        if(!checkPassword) {
            return res.status(401).json({message : `Password is not match..........`});
        }

        let token = await jwt.sign({userId : user._id}, 'User');
        console.log(token);

        res.status(201).json({user,token,message : `User login successfully........`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.getAllUsers = async(req,res) => {
    try {
        let users = await userServices.getAllUsers({isDelete : false});

        if(!users) {
            return res.status(404).json({message : `Users dodoeses not found.......`});
        }

        res.status(200).json(users);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.getUser = async(req,res) => {
    try {
        let user = await userServices.getUserById(req.query.userId);

        if(!user) {
            return res.status(404).json({message : `User does not found..........`});
        }
        
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.updateUser = async(req,res) => {
    try {
        let user = await userServices.getUserById(req.query.userId);

        if(!user) {
            return res.status(404).json({message : `User is not found.........`});
        }

        user = await userServices.updateUser(user._id,{...req.body});
        
        res.status(201).json({message : `user update successfully.......`,user});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.deleteUser = async(req,res) => {
    try {
        let user = await userServices.getUserById(req.query.userId);

        if(!user) {
            return res.status(404).json({message : `User id not found.....`});
        }

        user = await userServices.deleteUser(user._id);

        res.status(200).json({user,message : `user delete successfully.........`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.....${console.error()}`});
    }
}