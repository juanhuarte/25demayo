const express = require('express')
const { abrirCajita } = require('../controllers/abrirCajita')
const router = express.Router()
const { allInfo } = require('../controllers/allInfo')
const { comparePasswords } = require('../controllers/comparePasswords')
const { hashPassword } = require('../controllers/hashPassword')

router.get('/', allInfo)

router.get('/:clave', hashPassword)
router.post('/comparaClave', comparePasswords)
router.post('/abrirCajita', abrirCajita)

module.exports = router
