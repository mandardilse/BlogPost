const mongoose = require('mongoose')
const schema = mongoose.Schema

const orgUserSchema = new schema({
	org:{type:schema.Types.ObjectId, ref:'Organisation'},
	users:[{type:schema.Types.ObjectId, ref:'User'}]
})

module.exports = mongoose.model('OrganisationUsers', orgUserSchema)