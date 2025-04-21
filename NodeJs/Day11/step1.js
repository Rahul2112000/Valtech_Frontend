let firstname="Rahul";
let lastname="Saini";
let compname="Valtech";
let city="Jaipur";
let version=102102;

let fullname=function(){
    return firstname+" "+lastname;
}


// module.exports.city=city;


// module.exports.version=version;
// module.exports={city,compname,version};
export{firstname,lastname,compname,city,version};
