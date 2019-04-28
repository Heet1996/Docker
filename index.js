const express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send('Heya there');
});

app.listen(3000,()=>{
    console.log("Listening to port"); 
});