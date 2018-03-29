const mongoose = require("mongoose")
const schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new schema({
	first_name: {type: String, min:1, max: 255},
	middle_name: {type: String, default: null},
	last_name: {type: String, min:1, max: 255},
	date_of_birth: {type: Date, default: null},
	user_id: {type: String, min:1, max: 255},
	pwd: {type: String, min:1, max: 255},
	organisation:[{type: schema.Types.ObjectId, ref:'UserOrganisations'}],
	address:[{
		details:{type: String, min:1},
		city:String,
		state:String,
		country:String,
		zipcode:{type:Number, default:0}
	}],
	contacts:[{
		emails:[{type: String, min:1, max: 255}],
		phones:[{type: String, min:1, max: 20},]
	}],
	relationship:{type: String, min:1, max: 255},
	AllowMultipleLogin:{type:Boolean, default:false},
	Roles:[{type:schema.Types.ObjectId, ref:'Role'}],
	Previllages:[{
		key:String,
		value:String
	}],
	isactive:{type: Boolean, default:false}
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