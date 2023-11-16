const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        console.log("Hotel Home Page");
        res.render('home');
    }).post((req,re)=>{

    });


module.exports = router;