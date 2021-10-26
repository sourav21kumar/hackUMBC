const express = require('express')
const mongoose = require('mongoose')
const api_routes = require('./routes/api_routes')
const rateLimit = require('express-rate-limit')
const dotenv = require('dotenv').config()
const app = express()
app.set('trust proxy', 1);
const apilimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
  });
  

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const dbURI = process.env.DBURI
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(3000,()=>{
        console.log('Listnening at port 3000')
    })
}).catch(err =>{console.log(err)})

app.get('/',(req,res)=>{
    res.status(200).send({message:'Success'})
})

  //  apply to /api/status request
app.use("/api/status", apilimiter);
app.use(api_routes)