let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  subscribed: { type: Boolean, default: false }
});

export default mongoose.model('User', UserSchema);
