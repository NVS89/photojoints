var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var userSchema = new Schema({
    loginName          : { type: String, required: true, trim: true, index: { unique: true } }
    , password   : { type: String, required: true }
    , date_created  : { type: Date, required: true, default: Date.now }
});

var user = mongoose.model('user', userSchema);

module.exports = {
    User: user
};