require('dotenv').config();
const nodemailer = require('nodemailer');

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Step 2
function getMailOptions() {
    return {
        from: '2018cs61@student.uet.edu.pk',
        // to: 'abc@gmail.com',
        subject: "Company User Invitation",
        text: ""
    }
}

// Step 3
function sendMail(email, message, res) {
    const mailOpts = getMailOptions();

    return transporter.sendMail({ ...mailOpts, to: email, text: message }, (err, data) => {
        if (err) {
            res.status(400).json(`${err}`)
        }
        else {
            res.status(200).json({ message: "Email Sent & successfully saved new company user" })
        }

    });
}



module.exports = { sendMail }