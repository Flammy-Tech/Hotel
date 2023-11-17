const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        console.log("Spa Page");
        res.render('spa');
    }).post((req,res)=>{

    });

    router.route('/massages').get((req,res)=>{
        console.log("Massages Page");
        res.render('massages');
    });

module.exports = router;