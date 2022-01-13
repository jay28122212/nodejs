const path=require('path')
const express=require('express')
const http=require('http')
const socketio=('socket.io')

const app=express()
const server=http.createServer(app)
const io=socketio(server)


const port=process.env.PORT || 3000
// const pubdictpath=path.join(_dirname,'../public')

app.use(express.static(pubdictpath))

io.on('connection',()=>{
    console.log('new websocket connection')
})

app.listen(port,()=>{
    console.log(`server on ${port}`)
})
 
