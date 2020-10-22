const express = require('express');
const router = express.Router();
var vimeo = require('vimeo').Vimeo;
const config = require('./config.json');
 var client = new vimeo(config.CLIENT_ID, config.CLIENT_SECRET, config.ACCESS_TOKEN);
 const videoDtls = require('./model/videoDetails');
 const userList = require('./model/userList');



router.post('/login',(req,res,next) =>{
    // res.send('get the video');
    userList.findOne({usrName: req.body.usrName},(err,result) =>{
        if(err) {
            res.json({msg : "error in finding the detais : " +err});
        }
        if(result && (req.body.pswrd === result.pswrd)) {
                res.json({msg : "Success"});
        }
        else{
            res.json({msg: "Invalid User"});
        }
    })
});


router.post('/signUp',(req,res,next) =>{
    // res.send('get the video');
    let user = new userList({
        usrName : req.body.usrName,
        password : req.body.pswrd
    })
    user.save((err, user) =>{
        if(err){
            res.json({msg: "failed to add the user details into db"});
        }
        else{
            res.json({msg: "Success"});

        }
    })
    
});

router.post('/uploadVideo',(req,res,next) =>{
    client.upload(
        req.body.video,
        function (uri) {
          console.log('File upload completed. Your Vimeo URI is:', uri)
            let newVideo = new videoDtls({
                videoName : req.body.videoName,
                vimeoUrl : uri,
                createdBy: req.body.usrName,
                createdTime : new Date()
            });
            newVideo.save((err, video) =>{
                if(err){
                    res.json({msg: "failed to add the video details into db"});
                }
                else{
                    res.json({msg: "added the video details into db successfully"});

                }
            })
        },
        // function (bytesUploaded, bytesTotal) {
        //   var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
        //   console.log(bytesUploaded, bytesTotal, percentage + '%')
        // },
        function (error) {
          console.log('Failed because: ' + error)
        }
      )
});

router.get('/',(req,res,next) =>{
     res.send('get the video');
    userList.findOne({usrName: req.body.usrName},(err,result) =>{
        if(err) {
            res.json({msg : "error in finding the detais : " +err});
        }
        if(result && (req.body.pswrd === result.pswrd)) {
                res.json({msg : "Success"});
        }
        else{
            res.json({msg: "Invalid User"});
        }
    })
});

 

module.exports = router;