const User = require('../model/user.model');

module.exports = class userServices {

    // add user 

    async addUser(body) {
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
        }
    };

    // get user 

    async getUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
        }
    };

    // get user by id 

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
        }
    };

    // get all users 

    async getAllUsers(body) {
        try {
            return await User.find(body);
        } catch (error) {
            console.log(error);
        }
    };

    // update user 

    async updateUser(id,body) {
        try {
            return await User.findByIdAndUpdate(id,body);
        } catch (error) {
            console.log(error);
        }
    };

    // delete User 

    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
}