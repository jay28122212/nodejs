const express=require('express')
require('./jay/nodejs/mongoose')
const User =require('./jay/samp/user')

const app=express()

app.use(express.json())

//Send the Data
app.post ('/user',(req,res)=>{
  const User=new User(req.body)


  user.save().then((users)=>{
      res.send(users)
  }).catch(()=>{

  })
}) 

//Get the data

app.get('/user',(req,res)=>{
User.find({}).then(()=>{
res.send(user)
}).catch(()=>{

})
})


app.listen(3000,()=>{
    console.log('we are port in 3000')
})