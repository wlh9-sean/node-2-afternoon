const express = require('express')

const ctrl = require('./controllers/messagesCtrl')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', ctrl.createMessage)

app.get('/api/messages', ctrl.getMessage)

app.put('/api/messages/:id', ctrl.updateMesssage)

app.delete('/api/messages/:id', ctrl.deleteMessage)


const port = 3001
app.listen(port, () => console.log(`Listening on port ${port}`))