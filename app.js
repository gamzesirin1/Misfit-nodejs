const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const db = require('./config/db')

const pageRoute = require('./routes/pageRoutes')
const trainingRoute = require('./routes/trainingRoute')
dotenv.config()
const app = express()

//Templete Engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/', pageRoute)
app.use('/trainings', trainingRoute)

//Listen on port

const PORT = process.env.PORT || 5000

//Connect to DB
db()

app.listen(PORT, () => {
	console.log(`Server ${PORT} portunda başlatıldı.`)
})
