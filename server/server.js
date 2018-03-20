const express = require('express')
const http = require('http')
var cors = require('cors')
const socketIO = require('socket.io')

// our localhost port
const port = 4001;

const app = express()

//enables all cors requests
app.use(cors())
app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

const server = http.createServer(app)

//workaround to bug https://github.com/socketio/socket.io/issues/3179
//Needs to define ws engine or events are super slow
const io = socketIO(server, (http, { wsEngine: 'ws' }))


io.on('connection', socket => {
  //connect message
  console.log('CONNECT: Session ' + socket.id + ' Connected')
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('DISCONNECT: Session ' + socket.id  + ' Disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))