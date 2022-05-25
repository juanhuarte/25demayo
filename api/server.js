const express = require('express')
const cors = require('cors')
const router = require('./routes')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api', router)

server.listen(4000)
