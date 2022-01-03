const express=require('express')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())

// Post the data from the api
app.post('/user',(req,res)=>
{
    console.log(req.body)

    res.send('testing')
})

// Post the data from api

app.post('/task',(req,res)=>{
    const task= new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch((e)=>{
        res.send(e)
    })
})



//Get the data from api
app.get('/user/:id',(req,res)=>{
    user.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.send(e)
    })
})
app.listen(port,()=>{
    console.log('server on port'+ port)
})

//Get data for id 

app.get('/user',(req,res)=>{
    cnst ids=req.params.id
    user.find(ids).then((usera)=>{
        if(!users){
            return res.send()

        }
        res.send(users)
    }).catch((e)=>{
        rse.send(e)
    })
})