const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
   port: 465,
   host: 'smtp.gmail.com',
   auth: {
      pass: '25demayo',
      user: '25demayo.darwoft@gmail.com',
   },
   tls: { rejectUnauthorized: false },
})

function sender(to, subject, contenido) {
   transport.sendMail(
      {
         from: 'Aplicación 25 de Mayo <25demayo.darwoft@gmail.com>',
         to: to,
         subject: subject,
         //  text: contenido,
         html: contenido,
      },
      () => console.log('Ya mandé el mail')
   )
}

module.exports = sender
