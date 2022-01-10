const express=require('express')
const sharp=require('sharp')
const app=express()
const multer=require('multer')

const uplod= multer({
    dest:'image',
    limits:{
        filesize:100000
    },
    filefilter(req,file,cb){

        if(file.originalname.endwith('.pdf')){
return cb(new Error('plese uplod pdf'))
        }


 cb(undefine,true  )     
    }

})

app.post('/uplod',uplod.single('uplod'),(req,res)=>{
    res.send()
})

router.get('/user/:id/avtar',async(req,res)=>{
    try{
        const user=await User.findID(req.params.id)

        if(!user||user.avtar){
            throw new Error()
        }
        res.set('contation-type','image/jpg')
        res.send(user.avtar)
 catch(e){
     res.send(e)
 }
    }
})