const mongoose = require("mongoose");

exports.isvalidpassword = function (password) {
    password=password.trim()
    const passwordRegex = 	/^(?=.*\d).{8,15}$/;
    return passwordRegex.test(password);
};

exports.isvalidMobileNumber = function (phone) {
    phone=phone.trim()
    const MobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return MobileNumberRegex.test(phone);
};

exports.isvalidEmail = function (email) {
    email=email.trim()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

exports.isvaliduserId = function (userId) {
    userId=userId.trim()
    return mongoose.Types.ObjectId.isValid(userId);
  };

exports.isvalidName = function (name) {
    name=name.trim()
    const nameRegex = /^[a-zA-Z ][a-zA-Z ]*$/;
    return nameRegex.test(name);
  };

  exports.isValidTitle = function (title) {
    title=title.trim()
    const regex = /^[A-Za-z0-9\s\-_,\.;:()]+$/
    return regex.test(title)
  }

  exports.isvalidRating = function(value){
    const regex =/^\d*(\.\d+)?$/
    return regex.test(value)
  }