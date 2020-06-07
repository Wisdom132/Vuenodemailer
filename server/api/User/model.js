const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Include your name"]
    },
    email: {
        type: String,
        required: [true, "Please Include your email"]
    },
    phone: {
        type: String,
        require: [true, "Please Include your phone number"]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;