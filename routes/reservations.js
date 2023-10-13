const express = require('express');
const router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.render('reservations')
    }).post((req,res)=>{

    }).patch((req,res)=>{

    }).delete((req,res)=>{
        
    });

module.exports = router