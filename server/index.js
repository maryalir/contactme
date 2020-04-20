const path = require ('path');
const express = require ('express');
const app = express();

const buildPath= path.join(__dirname,'..','build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send',(req,res) => {
  var data = req.body;
  console.log(data);
  res.send(data);
});

app.listen(3030, () => {
  console.log('server started in port 3030');
});