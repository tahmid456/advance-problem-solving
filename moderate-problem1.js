function findingBadData(arr){

if(!Array.isArray(arr)){

return "please provide an array of number."

}
else{
let badData = 0;

for(let i = 0; i<arr.length; i++){


    if(typeof arr[i] !=="number"){

        return "please provide a number in array"
    }
    else {

        if(arr[i]<0){

            badData++;
        } 
    }


} return badData;
}

}

const x = [2,3,4,-2];
console.log(findingBadData(x));

