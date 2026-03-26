const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const router = express.Router();

router.post('/post',async (req,res)=>{
    const token = req.cookies.token;
    if( !token ){
        return res.status(401).json({
            message : "invalid token "
        })
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode)
        const user = await userModel.findOne({
            _id : decode.id
        })
        return res.status(200).json({
            message : "Token is valid",
            user
        })
    }catch(err){
        return res.status(401).json({
            message : "unauthorized"
        })
    }
})

module.exports = router;