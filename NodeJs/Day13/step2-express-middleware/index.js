const express=require('express');
const app=express();



//static built in middleware
// app.use("/assets/spider3_tn.jpg",express.static(__dirname+"/images/batman.jpg"));
// app.use(express.static(__dirname+"/"));



 
/* 
app.use(function (req, res, next) {
  console.log("first middleware");
  next();
});
app.use(function (req, res, next) {
  console.log("second middleware");
  next();
});
app.use(function (req, res, next) {
  console.log("third middleware");
  next();
}); 
*/
// Router Middleware
let myRouteGuard = function (req, res, next) {
  console.log("Route Guard");
  next();
};
app.use("/rahul",function(req,res,next){
  console.log("Rahul route guard");
  next();
}
);

app.get("/rahul",function(req,res,next){
  console.log("Rahul route");
  next();
 // res.send("Rahul route");
 
}
);
 
// root routes
app.get("/", function (req, res) {
  console.log("home route was called");
  res.send("home page");
});
 
// named routes
app.get("/about", myRouteGuard, function (req, res) {
  console.log("about route was called");
  res.send("about page");
});
 
// routes with params
app.get("/products/:args/:item", function (req, res) {
  console.log("product parameter was ", req.params["args"], req.params["item"]);
  res.send("product route " + req.params["args"] + " " + req.params["item"]);
});
 
// http://localhost:3000/products/1001
// http://localhost:3000/products/2001
 
// default routes
app.get("*app", function (req, res) {
  console.log("wildcard route was called");
  res.send("404 page");
});
 
app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error ", error);
  } else {
    console.log("server is now live on localhost:3000");
  }
});

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// }
// );


// app.listen(3000,"localhost",function(error){
//     if(error){
//         console.log("Error in starting server");
//     }else{
//         console.log("Server started at port 3000");
//     }
// }
// );