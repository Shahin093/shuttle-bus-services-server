const User = require("../model/user");

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
};