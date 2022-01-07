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

app.post('/user/login',async(req,res)=>{
  try{
    const user= await User.findBycredentials(req.body.email,req.body.password)
    const token=await user.generateAuthtoken()
    res,send(user,token)
  }catch(e){
res.send(e)
  }
})


app.listen(3000,()=>{
    console.log('we are port in 3000')
})