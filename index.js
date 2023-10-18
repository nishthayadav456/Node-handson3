const express=require('express');
const categoryRouting=require('./routing/categoryRouting')
const app=express();
const middleware1=(req,res,next)=>{
    const age=22
    if(age>=18){
        next()
    }
    else{
        res.send("user not allowed")
    }
    // console.log("middleware1 run first and the he is going to hit the api")
    // next()
}
// const middleware2=(req,res,next)=>{
//     console.log("middleware2 run first and the he is going to hit the api")
//     next()
// }
// const middleware3=(req,res,next)=>{
//     console.log("middleware3 run first and the he is going to hit the api")
//     next()
// }
app.use(middleware1)//application level middleware
// app.use(middleware2)
// app.use(middleware3)
app.use("/api",categoryRouting);
app.get('/',(req,res)=>{
    console.log("This is a Home Page")
    res.send('ApI is running fine')
    
});
app.listen(4002,()=>{
    try{
        console.log('server is running in port 4002')
    }
    catch(err){
        console.log('error found')
    }
});