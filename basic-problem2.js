function isJavaScriptFile(fileName){


if(typeof fileName !=="string"){

    return "please provide a filename(string)"
}

else {

    if(fileName.endsWith(".js")){
return true;

    }
    else{
        return false;
    }
}


}
const result = isJavaScriptFile("index.js");
console.log(result);
