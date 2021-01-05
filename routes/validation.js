const express = require('express')
const router = express.Router()

const joi = require('joi')

async function validating(email, password){
    const schema = joi.object({
        email       : joi.string().email().required(),
        password    : joi.string().min(5).max(10).required() 
    })

    try{
        const result = await schema.validateAsync({email : email,password : password})
        console.log(result)
    }catch(err){
        return console.log(err.message)
    }
}

router.route('/')
    .post((req,res,next)=>{
        const email = req.body.email
        const password = req.body.password
        validating(email, password)
        res.redirect('/')
    })

module.exports = router