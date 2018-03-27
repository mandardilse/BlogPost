const express = require('express')
const userModel = require('../models/user.model')
const router = express.Router()

router.post('/login', async (req,res)=>{
	var formData = req.body
	var user = await userModel.findOne({email: formData.email})
	if(!user)
		return res.sendStatus(401).send({errorMessage: 'Email or Password invalid'})
	bcrypt.compare()
})

router.post('/register', async(req,res)=>{
	var formData = req.body
	console.log(formData)
	var user = await userModel.findOne({email:formData.email})
	if(!user){
		user = new userModel(formData)
		user.save((err,result)=>{
			if(err){
				console.log(err)
				return res.status(500).send({errorMessage:err.message})
			}else{
				return res.status(200).send(user)
			}
		})
	} else {
		return res.status(401).send({errorMessage: 'User already exists'})
	}
})

router.get('', async (req,res)=>{
	console.log('Yes')
	var userList = await userModel.find({},'-pwd -__v')
	if(!userList ||(userList && userList.length == 0))
		return res.status(500).send({errorMessage:'Sorry no users in database!'})
	return res.status(200).send(userList)
})

router.get('/:id', async (req,res)=>{
	var user = await userModel.find({_id:req.params.id})
	if(!user)
		return res.status(500).send({errorMessage:'Could not able to find user'})
	return res.status(200).send(user)
})

module.exports = router;