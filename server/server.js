require("./connection");
const express=require('express');
const app=express();
app.use(express.json());


app.get('/',(req,res)=>{
    console.log('server');
})
console.log("server started");


app.listen(5000,()=>{

    console.log('App is running on port no :5000\n');
})