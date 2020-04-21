const nodemailer = require ('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var trasporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

module.exports = trasporter;