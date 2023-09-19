const Training = require('../models/Training')
exports.createTraining = async (req, res) => {
	const training = await Training.create(req.body)
	try {
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
