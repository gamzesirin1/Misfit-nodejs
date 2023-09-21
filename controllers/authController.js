const bcrypt = require('bcrypt')
const User = require('../models/User')
const Category = require('../models/Category')
exports.createUser = async (req, res) => {
	try {
		const user = await User.create(req.body)
		res.status(201).redirect('/login')
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		})
	}
}
exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(401).json({ message: 'Invalid email or password' })
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' })
		}
		req.session.userID = user._id
		res.status(200).redirect('/users/dashboard')
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Internal server error' })
	}
}

exports.logoutUser = async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/')
	})
}

exports.getDashboardPage = async (req, res) => {
	const user = await User.findOne({ _id: req.session.userID })
	const categories = await Category.find({})
	res.status(200).render('dashboard', {
		page_name: 'dashboard',
		user,
		categories
	})
}
