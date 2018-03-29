const mongoose = require('mongoose')
const schema = mongoose.Schema

const userRoleSchema = new schema({
	user:{type:schema.Types.ObjectId, ref:'User'},
	role:{type:schema.Types.ObjectId, ref:'Role'}
})