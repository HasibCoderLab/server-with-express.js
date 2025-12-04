import express from "express"

const  app= express()
const port = 7000;
app.get("/" , (req,res) =>{
res.send("Hello Bro")
})
app.listen( port , () =>{
    console.log(`server stated at ${port}`);
    
})