const mongoose=require('mongoose')

mongoose.connect('',{
    1,2
})

const user=mongoose.model('user',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

comst me=new user({
    name:'jay',
    age:25
})

me.save().then((result)=>{
    console.log(result)
}).catch((r)=>{
    console.log(e)
})