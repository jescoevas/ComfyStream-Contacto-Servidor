const { Router } = require('express')
const nodemailer = require('nodemailer')

const router = Router()

router.post('/enviarCorreo', async(req, resp) => {
    const { email, asunto, cuerpo } = req.body
    console.log(email)
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'comfystreamcontact@gmail.com',
            pass: 'grupo5ispp'
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