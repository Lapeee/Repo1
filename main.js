var fs=require("fs");
var date=fs.readFile("input.txt",function(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString());
});

console.log("ohjelma loppui");
