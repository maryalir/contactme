const path = require ('path');
const express = require ('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath= path.join(__dirname,'..','build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send',(req,res) => {
  var data = req.body;
  try{
    const mailOptions = {
      from: data.email,
      to: process.env.email,
      subject: `New email from website from ${data.name}`,
      html: data.message
    };

    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        res.status(500).send({
          success: false,
          message: "Message not sent. Reach out to me at linkedIn."
        })
      }else {
        res.send({
          success: true,
          message: "Thanks for contacting me. I will get back to you soon"
        })
      }
    })

  } catch (error){
    res.status(500).send({
      success: false,
      message: "Message not sent. Reach out to me at linkedIn."
  });
  // res.send(data);
  }

});

app.listen(3030, () => {
  console.log('server started in port 3030');
});