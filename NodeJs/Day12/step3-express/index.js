const express=require('express');
let app=express();

// app.get('/',(req,res)=>{
//     res.send('Hello World  rahul saini');
// }
// );


app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/about.html",function(req,res){
    res.sendFile(__dirname + "/public/about.html");
});
app.get("/contact.html",function(req,res){
    res.sendFile(__dirname + "/public/contact.html");
});
app.get("/*splat",function(req,res){
    res.sendFile(__dirname + "/public/404.html");
});


let address=app.listen(3000,function(){
    console.log(this.address().port);
});