function sumOfN(n){

if(n===1){

return 1;

}
else {

    return n + sumOfN(n-1);
}


}
const n = 3;
console.log(sumOfN(n));