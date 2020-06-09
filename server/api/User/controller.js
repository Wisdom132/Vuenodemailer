let User = require("./model");
let mailer = require("../../config/mailer");

exports.registerNewUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        let addedUser = await user.save();

        if (addedUser) {
            mailer.welcomeMail(req.body.email, req.body.name)
        }


        res.status(200).json({
            msg: "Welcome Onboard",
            data: addedUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({
            msg: "Welcome Onboard",
            data: users
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}