const express = require('express')
const { request, response } = require('express')
const cors = require('cors')
const app = express()

const messagesRouter = require('./src/routes/messages')

//Aqui se monta el enrutador montado XD
app.use('/messages', messagesRouter)

app.use(cors())

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'node API',
  })
})

module.exports = app
