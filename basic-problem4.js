function isLGSeven(x){
if(typeof x!=="number"){

return "please provide a number"

}

else {

    const y = x-7;
    const z = x*2;

if(y<7){
return y;

}
else {

    return z;
}

}


}

const result = isLGSeven(15);
console.log(result);