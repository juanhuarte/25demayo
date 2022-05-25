const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.comparePasswords = (req, res) => {
   try {
      const { claveHasheada, claveSinHashear } = req.body
      const coincide = bcryptjs.compareSync(claveSinHashear, claveHasheada)
      if (!coincide) throw new Error('VOLÁ DE ACA, TRUCHO')
      // emita el token
      const token = jwt.sign(
         {
            fecha: new Date().toLocaleString(),
            mail: 'biaus.fh@gmail.com',
         },
         'Conestafrasedefirmaqueestoyponiendoacá'
      )
      res.json({ token })
   } catch (e) {
      res.json({ error: e.message })
   }
}
