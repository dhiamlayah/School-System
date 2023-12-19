const express = require("express");
const router = express.Router();
const twilio = require('twilio')

 

router.post('/',(req,res)=>{
     try{   
        const twilioPhone = process.env.twilioPhone
        const phone = req.body.phone
        const message = req.body.message
        const client = new twilio(process.env.AccountSID,process.env.AuthToken)
        client.messages.create({
             body:`${message}`,
             to:`+216${phone}`,
             from: twilioPhone
         }).then((message)=>{
             console.log(message.sid)
             return res.status(200).json({message:'message send successfuly'})
         }).catch((error)=>{
             console.log('error from twilio',error)
             res.status(400).json({message:'we have an error to send sms , check your message or phone'})    
        })
     }catch(error){
        console.log(error)
        res.status(400).json({message:'ther is an error from the server'})    
    }
})

module.exports = router;
