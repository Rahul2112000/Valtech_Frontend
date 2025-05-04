const express = require('express');
let app=express();

// app.use(express.static(process.cwd()+"/public"));
app.use(express.static(__dirname+"/"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
}
);


app.listen(3000,"localhost",function(error){
    if(error){
        console.log("Error in starting server");
    }else{
        console.log("Server started at port 3000");
    }
}
);