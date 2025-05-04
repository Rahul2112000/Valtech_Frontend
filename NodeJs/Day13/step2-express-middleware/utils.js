module.exports.errorHandler=function(error){
  if(error){
      console.log("Error ",error);
  }else{
      console.log("port and host live on 3000");
  }
}