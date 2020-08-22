const mongoose = require('mongoose');

// blueprint for how your data should look like
const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: { type : String, required: true},
  imagePath: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
});

// .model() fisrt arg is the name, second is the instance
module.exports = mongoose.model('Post', postSchema);
