const Training = require('../models/Training')
exports.createTraining = async (req, res) => {
	try {
		const training = await Training.create(req.body)
		res.status(201).json({
			status: 'success',
			training
		})
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
}

exports.getAllTrainings = async (req, res) => {
	try {
		const trainings = await Training.find()
		res.status(200).render('trainings', {
			trainings: trainings,
			page_name: 'trainings'
		})
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
}

exports.getTraining = async (req, res) => {
	try {
		const training = await Training.findOne({ slug: req.params.slug })
		res.status(200).render('training', {
			training: training,
			page_name: 'trainings'
		})
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
}
