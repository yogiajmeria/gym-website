
const express = require('express')
const path =require("path");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactfood')
const bodyparser =require('body-parser');
const app = express()
const port =process.env.PORT  || 8000;

// // define mongoose mongoose.Schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   Phone: String,
//   Email: String,
//   Address: String
// });
// const contact = mongoose.model('contact', contactSchema);

// console.log(__dirname);

const staticPath =path.join(__dirname, "../public");
// console.log(path.join(__dirname,"../public"))
app.set('view engine' ,"hbs");
app.use(express.static(staticPath));

app.get("/" ,(req,res)=>{
  res.render('login.hbs')
})

app.post('Contact', (req,res)=>{
let mydata =new contact(req.body);
mydata.save().then((req,res)=>{
  res.send("your data has been save to the database")
}).catch(()=>{
  res.status(404).send("item was not save to the database")
})
  res.render('login.hbs')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})