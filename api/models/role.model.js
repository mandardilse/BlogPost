const mongoose = require('mongoose')
const schema = mongoose.Schema

const roleSchema = new schema({
	name:String,
	access:[{type:schema.Types.ObjectId, ref:'RoleAccess'}]
})

module.exports=mongoose.model('Role',roleSchema)