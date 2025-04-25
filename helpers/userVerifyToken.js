const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

exports.userVerifyToken = async(req,res,next) => {
    try {
        let authorization = req.headers['authorization'];

        if(authorization === undefined) {
            return res.status(401).json({message : `Unauthorization........`});
        }

        let token = await authorization.split(" ")[1];
        console.log(token);

        if(token === undefined) {
            return res.status(401).json({message : `Invalid authorization.....`});
        }
        else {
            let {userId} = jwt.verify(token,'User');
            let user = await User.findById(userId);

            if(user) {
                req.user = user;
                next();
            }
            else {
                return res.status(401).json({message : `Invlid user(token) ${console.error()}`})
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
}