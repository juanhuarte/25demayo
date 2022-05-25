const bcryptjs = require('bcryptjs')

module.exports.hashPassword = (req, res) => {
   const { clave } = req.params
   // hashearla
   const claveHasheada = bcryptjs.hashSync(clave, 10)

   res.json({ claveHasheada })
}
