const express = require('express')
const router = express.Router()
const { allInfo } = require('../controllers/allInfo')

router.get('/', allInfo)

module.exports = router
