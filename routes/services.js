const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        console.log("Services Page");
        res.render('services');
    }).post((req,res)=>{

    });


module.exports = router;