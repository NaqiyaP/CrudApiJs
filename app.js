const express=require('express')

const mongoose=require('mongoose')
const url='mongodb://localhost/AlienDBex'


const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const com=mongoose.connection
//two ways of writing the function
//1:
confirm.on('open',function(){
    console.log('connected......')
})

const con=mongoose.connection
app.use('/aliens',alienRouter)

//2:
app.listen(9000,()=>{
    console.log('server started')
})