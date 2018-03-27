const mongoose = require('mongoose')
const schema = mongoose.Schema

const organisationSchema = new schema({
	name:String,
	orgtype:String,
	user_id:String,
	pwd:String,
	users:[{type:schema.Types.ObjectId, ref:'User'}],
	members:[{name:String, title:String}],
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
	established_date:{type:Date, default:null},
	AllowMultipleLogin:{type:Boolean, default:false},
	Roles:[String],
	Previllages:[{
		key:String,
		value:String
	}]
})

module.exports = new mongoose.model('Organisation', organisationSchema)