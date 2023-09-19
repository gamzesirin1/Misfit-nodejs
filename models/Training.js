const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trainingSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	createAt: {
		type: Date,
		default: Date.now
	}
})
const Training = mongoose.model('Training', trainingSchema)
module.exports = Training
