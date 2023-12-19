const express = require("express");
const router = express.Router();
const ParentModel = require("../models/Parents");
const auth = require("../middlewares/authorization")
 

router.get('/',auth,async(req,res)=>{
    try{   
        const pernet = await ParentModel.findById(req.user._id).select("-Password")
        if(!pernet){
            res.status(400).json({message:'we dont find this parent rigth now'})
        }
        res.status(200).json(pernet)
        }catch(error){
            console.log("error",error)
            res.status(500).json({message :' error from the server'})
        }
})

    

module.exports = router;
