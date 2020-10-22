const mongoose = require('mongoose');

const UsrDetailsSchema = mongoose.Schema({
    usrName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const userDtls = module.exports = mongoose.model('userDtls', UsrDetailsSchema);