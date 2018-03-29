const mongoose = require('mongoose')
const schema = mongoose.Schema

const roleAccessSchema = new schema({
	name:String
})

module.exports = mongoose.model('RoleAccess', roleAccessSchema)