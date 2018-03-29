const mongoose = require('mongoose')
const schema = mongoose.Schema

const userOrgSchema = new schema({
	user: { type: schema.Types.ObjectId, ref: 'User'},
	organisations:[{type:schema.Types.ObjectId, ref:'Organisation'}]
})

module.exports = mongoose.model('UserOrganisations', userOrgSchema)