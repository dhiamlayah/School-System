const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const ParentModel = require("../models/Parents");
const jwt = require("jsonwebtoken");

 

router.post('/',async(req,res)=>{
    try{
        const {
            FirstName,
            LastName,
            CIN,
            Phone,
            Password,
            Email,
            Adress,
          } = req.body.informations; 
        const parent = await ParentModel.findOne({CIN});
        if(parent){
            return res.status(400).json({message:'user already exist'})
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const newParent = new ParentModel ({
            FirstName,
            LastName,
            CIN,
            Phone,
            Password:hashedPassword,
            Email:Email|null,
            Adress,
        })
        await newParent.save()
        const token = jwt.sign(
            { _id: newParent._id },
            process.env.access_token_secret
          );
        res.setHeader("token", token);
        return res.status(200).json({message:'account created successfuly'})
        
    }catch(error){
        console.log("error",error)
        res.status(500).json({message :' error from the server'})
    }

})

module.exports = router;
