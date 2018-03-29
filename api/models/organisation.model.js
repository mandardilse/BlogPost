const mongoose = require('mongoose')
const schema = mongoose.Schema

const organisationSchema = new schema({
	name:{type: String, min:1, max: 255},
	orgtype:String,
	user_id:{type: String, min:1, max: 255},
	pwd:{type: String, min:1, max: 255},
	users:[{type:schema.Types.ObjectId, ref:'OrganisationUsers'}],
	members:[{name:String, title:String}],
	address:[{
		details:{type: String, min:1},
		city:String,
		state:String,
		country:String,
		zipcode:{type:Number, default:0}
	}],
	contacts:[{
		emails:[{type: String, min:1, max: 255}],
		phones:[{type: String, min:1, max: 20}]
	}],
	established_date:{type:Date, default:null},
	AllowMultipleLogin:{type:Boolean, default:false},
	Roles:[{type:schema.Types.ObjectId, ref:'Role'}],
	Previllages:[{
		key:String,
		value:String
	}]
})

module.exports = new mongoose.model('Organisation', organisationSchema)