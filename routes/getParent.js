const express = require("express");
const router = express.Router();
const ParentModel = require("../models/Parents");

router.get('/',async(req,res)=>{
    try{   
    const pernets = await ParentModel.find().select("-Password")
    if(!pernets){
        res.status(400).json({message:'we dont have parents rigth now'})
    }
    res.status(200).json(pernets)
    }catch(error){
        console.log("error",error)
        res.status(500).json({message :' error from the server'})
    }
})


module.exports = router;
