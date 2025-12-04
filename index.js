// import express from "express"

// const  app= express()
// const port = 7000;
// app.get("/" , (req,res) =>{
// res.send("Hello Bro");
// });
// app.listen( port , () =>{
//     console.log(`server stated at ${port}`);
    
// })


// ================ Routing code with express ===========
 import express from "express"

 const app = express();
 const port = 7000;

 app.get("/" , (req, res) =>{
    // res.send("<h1>Hasib</h1>");
    // res.send("Tihs is a contact page");
    res.json({name:"Hasib" , age:"18"})

 });
 app.get("/about" , (req, res) =>{
    res.send("Tihs is a about page");
 });
 app.get("/contact" , (req, res) =>{
    res.send("This is a contact page ");
 });
 app.listen(port , () =>{
    console.log(`Server is stated at ${port}`);
    
 });
