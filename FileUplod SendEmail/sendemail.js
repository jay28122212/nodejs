const sMail=require('@sendgrid/mail')

const sendgridApikey=""

sgMail.setkey(sendgridApikey)

sgMail.send({
    to:'jaypatel63555@gmail.com',
    from:'2018095900007454@spu.ac.in',
    subject:'i learn sending Email',
    text:'hi  fast learn nod.js'
})