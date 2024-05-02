// pages/api/contact.js
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    require('dotenv').config();

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      port: 587,
      host: "smtp-mail.outlook.com",
      auth: {
        user: 'wendellpires@hotmail.com',
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: 'demo email',
      to: 'your email',
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'An error occurred while sending the e-mail' });
      } else {
        console.log(info);
        res.status(200).json({ message: 'E-mail sent successfully' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}