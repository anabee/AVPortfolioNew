const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require('dotenv').config();


console.log(process.env.APIKEY)
const auth = {
    auth: {
        api_key: process.env.APIKEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) =>{
    console.log("hello")
    const mailOptions = {
        from: email, 
        to: "ana.valdivia112@gmail.com",
        subject: subject, 
        text: text
    }; 
    
    transporter.sendMail(mailOptions, (err, data)=> {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

}

module.exports = sendMail;

