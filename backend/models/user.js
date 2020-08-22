const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// blueprint for how your data should look like
const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

userSchema.plugin(uniqueValidator);

// .model() fisrt arg is the name, second is the instance
module.exports = mongoose.model('User', userSchema);
