const Training = require('../models/Training')
const Category = require('../models/Category')
exports.createTraining = async (req, res) => {
	try {
		const training = await Training.create(req.body)
		res.status(201).redirect('/trainings')
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
}

exports.getAllTrainings = async (req, res) => {
	try {
		const categorySlug = req.query.categories
		const category = await Category.findOne({ slug: categorySlug })

		let filter = {}
		if (categorySlug) {
			filter = { category: category._id }
		}
		const trainings = await Training.find(filter).sort('-createAt')
		const categories = await Category.find()
		res.status(200).render('trainings', {
			trainings: trainings,
			categories: categories,
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
