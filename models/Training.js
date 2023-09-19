const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slugify = require('slugify')
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
	},
	slug: {
		type: String,
		unique: true
	}
})
trainingSchema.pre('validate', function (next) {
	this.slug = slugify(this.name, {
		lower: true,
		strict: true
	})
	next()
})

const Training = mongoose.model('Training', trainingSchema)
module.exports = Training
