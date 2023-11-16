const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        console.log("Developer Contact Page");
        res.render('contact');
    }).post((req,res)=>{

    });


module.exports = router;