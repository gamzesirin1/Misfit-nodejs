const express = require('express')
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoutes')
const trainingRoute = require('./routes/trainingRoute')

const app = express()

//Connect to DB
// mongoose.connect('mongodb://127.0.0.1/my_database');       27017
mongoose
	.connect('mongodb://localhost/misfit-db', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		console.log('DB Connected successfully')
	})
	.catch((err) => {
		console.log(err)
	})
//Templete Engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static('public'))

//Routes
app.use('/', pageRoute)
app.use('/training', trainingRoute)

//Listen on port
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
