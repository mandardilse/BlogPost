const mongoose = require("mongoose")
const schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new schema({
	first_name: String,
	middle_name: {type: String, default: null},
	last_name: String,
	date_of_birth: {type: Date, default: null},
	user_id: String,
	pwd: String,
	organisation:[{
		name:String,
		org_type:String,
		title:String,
		address: [{
			details:String,
			city:String,
			state: String,
			country:String,
			zipcode:String
		}],
		contacts:[{
			emails:[String],
			phones:[String]
		}]
	}],
	address:[{
		details:String,
		city:String,
		state:String,
		country:String,
		zipcode:String
	}],
	contacts:[{
		emails:[String],
		phones:[String]
	}],
	relationship:String,
	AllowMultipleLogin:{type:Boolean, default:false},
	Roles:[String],
	Previllages:[{
		key:String,
		value:String
	}]
})

userSchema.pre('save',function(next){
	var user = this;
	if(!user.isModified('pwd'))
		user.next()
	bcrypt.hash(user.pwd, null, null, (err,hash)=>{
		if(err)
			return next(err)
		user.pwd = hash
		next()
	})
})

module.exports = mongoose.model('User', userSchema)