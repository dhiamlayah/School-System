const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const ParentModel = require("../models/Parents");
const jwt = require("jsonwebtoken");


router.post('/',async(req,res)=>{
   try{const {Password,CIN}= req.body.informations;
    const parent = await ParentModel.findOne({CIN})
    if(!parent){
        return  res.status(400).json({ message: "CIN or Password is wrong" });  
    } 
    const validPassword = await bcrypt.compare(Password,parent.Password)
    if(!validPassword){
        return  res.status(400).json({ message: "CIN or Password is wrong" });  
    }
    const token = jwt.sign(
        { _id: parent._id },
        process.env.access_token_secret
      ) 
      res.setHeader("token", token);
    res.status(200).json({message:"login successfuly"})
   }catch(error){
    console.log("error",error)
    res.status(500).json({message :' error from the server'})
   }
})

module.exports = router;
