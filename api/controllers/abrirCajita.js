const jwt = require('jsonwebtoken')
const sender = require('./sendMail')

module.exports.abrirCajita = (req, res) => {
   const { token } = req.body
   try {
      const resultado = jwt.verify(
         token,
         'Conestafrasedefirmaqueestoyponiendoacá'
      )
      // MANDA MAIL DANDO LA BIENVENIDA A MI MAIL y CON LA FECHA Y HORA EN QUE SE CREO EL TOKEN
      const contenido = `<h1 style="color: red;">Gracias por registrarte a las ${resultado.fecha}</h1>`
      sender(resultado.mail, 'Hola que tal como te va', contenido)
      res.json({ mensaje: 'Bienvenido' })
   } catch (e) {
      res.json({ error: 'RAJA DE ACÁ' })
   }
}
