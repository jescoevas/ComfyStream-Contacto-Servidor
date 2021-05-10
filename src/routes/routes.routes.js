const { Router } = require('express')
const nodemailer = require('nodemailer')

const router = Router()

router.post('/enviarCorreo', async(req, resp) => {
    const { email, asunto, cuerpo } = req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'comfystreamcontact@gmail.com',
            pass: 'Grupo2ispp.'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let cuerpo_entero = `Enviado por ${email}.\n\n${cuerpo}`

    const mailOptions = {
        from: email,
        to: 'comfystreamcontact@gmail.com',
        subject: asunto,
        text: cuerpo_entero
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
            resp.json({ msg: error.message })
        } else {
            console.log('Exito')
            resp.json({ msg: 'Exito' })
        }
    });
})

module.exports = router