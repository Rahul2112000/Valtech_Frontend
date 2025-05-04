const express=require("express");

let app=express();

app.get("/",function(req,res){
  res.render("home.pug");
}
);
app.get("/login",function(req,res){
  res.render("login.pug");
}
);
app.post("/login",function(req,res){
  res.render("login.pug");
}
);
app.get("/register",function(req,res){
  res.render("registeration.pug");
}
);
app.post("/register",function(req,res){
  res.render("registeration.pug");
}
);
app.get("/profile",function(req,res){
  res.render("profile.pug");
}
);
app.get("/logout",function(req,res){
  res.redirect("/");
}
);

app.listen(2010,"localhost",function(error){
    if(error){
        console.log("Error",error);
    }else{
        console.log("Express is live on localhost:2010");
    }
}
);