const hbs=require('hbs')
const express=require('express')

 const app=express()

 app.get('',(req,res)=>{
    res.send('hello  express')
})

app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send('We are in About Page')
})



// Using path declre
 const path= require('path')


const pathreq = path.join( __dirname,'../public')
app.use(express.static(pathreq))

// For Partials views
const partialspath = path.join( __dirname,'../views')
hbs.registerPartials(partialspath)


 

 // Dynemic 

 app.set('view engine','hbs')

 app.get('',(req,res)=>{
     res.render('index',{
         title:'jjjf',
         author:'ffff'
     })
 })

// Run For Server 

 app.listen(3000,()=>{
    console.log('we are port in 3000')
})