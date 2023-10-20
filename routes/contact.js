const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        res.render('contact');
    }).post((req,res)=>{

    });


module.exports = router;