const express = require('express')
const trainingController = require('../controllers/trainingController')
const router = express.Router()
router.route('/').post(trainingController.createTraining)
router.route('/').get(trainingController.getAllTrainings)
router.route('/:slug').get(trainingController.getTraining)

module.exports = router
