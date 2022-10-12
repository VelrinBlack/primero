import isEmail from 'validator/lib/isEmail';
import nodemailer from 'nodemailer';

const mail = (req, res) => {
  const { key, email, message } = req.body;

  if (!key) {
    return res.status(401).json({ message: 'Authentication key not provided' });
  }

  if (key !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Invalid authentication key' });
  }

  if (!email || !message) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'primero7241@gmail.com',
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'primero7241@gmail.com',
    to: 'kontakt@primero.com.pl',
    subject: 'Nowa wiadomość od klienta',
    text: `email: ${email}\nwiadomość: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ message: 'Error while sending mail' });
    } else {
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
};

export default mail;
