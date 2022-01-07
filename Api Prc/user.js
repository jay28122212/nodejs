const mongoose=require('mongoose')

mongoose.connect('',{
    1,2
})

const Task=mongoose.model('Task',{
    class:{
        type:String
    },
    stander:{
        type:Number
    }
    
})

const me=new Task({
    class:'abc',
    stander:52
})

me.save().then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})