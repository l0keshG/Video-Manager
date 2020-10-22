const mongoose = require('mongoose');

const VideoDetailsSchema = mongoose.Schema({
    videoName : {
        type : String,
        required : true
    },
    vimeoUrl : {
        type : String,
        required : true
    },
    createdBy :{
        type : String,
        required : true
    },
    createdTime : {
        type : Date,
        required : true
    }
});

const videoDtls = module.exports = mongoose.model('videoDtls', VideoDetailsSchema);