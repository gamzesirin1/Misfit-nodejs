const express = require('express')
const app = express()
const pageRoute = require('./routes/pageRoutes')
//Templete Engine
app.set('view engine', 'ejs')

//Middlewares
app.use(express.static('public'))

//Routes
app.use('/', pageRoute)

//Listen on port
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
