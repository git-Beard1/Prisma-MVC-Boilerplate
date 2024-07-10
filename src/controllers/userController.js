const userModel = require('../models/userModel');

module.exports.readAllUsers = async (req, res) => {
    try{
        const users = await userModel.getAllUsers();
        if(users.length === 0){
            res.status(404).json({message: "No users found."});
        }
        else{
            res.status(200).json(users);
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}