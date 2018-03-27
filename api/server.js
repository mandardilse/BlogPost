/* All lib */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

/* Other application module */
const userModule = require('./modules/users.module')

/* Use of application */
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/users',userModule)

mongoose.connect("mongodb://localhost:27017/test_db", (err)=>{
	if(!err)
		console.log("Connected!....")
	else
		console.log(err)
})

app.listen(3200)