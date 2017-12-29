var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

// Send email
router.post('/send', (req, res) => {
    const output = req.body.message;
    console.log(req.body);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'patra.manoj0@gmail.com', pass: 'zwszdvovwxlxvukd' }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Online store App 👻" <patra.manoj0@gmail.com>', // sender address
        to: req.body.to.join(','), // list of receivers
        subject: 'Online store notifications ✔', // Subject line
        text: `Greetings from online store app!!`, // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.status(200).json({
            msg: "Email sent"
        });
    });
});

module.exports = router;