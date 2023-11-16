const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        console.log("Signup Page");
        res.render('signup');
    }).post((req,res)=>{

    });


module.exports = router;