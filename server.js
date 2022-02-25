require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.URL_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('error', (err) => {
    console.log('Connect fail! ' + err.message)
})

mongoose.connection.once('open', () => {
    console.log('Connect success!')
})

const app = require('./app')

const server = app.listen(process.env.PORT , () => console.log('Running'))

