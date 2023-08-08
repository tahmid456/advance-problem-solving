function printDetails(person){

if(typeof person !== "object"){

    return "please provide me a valid object"


}

else{

const name = person.name || "nai";
const age = person.age || "nai" ;
const email = person.email || "nai" ;
const bow = person.bow ||  "nai";


return " amar nam  "  + name + " amar age  " +  age + " amar email  "+ email + " amar bow  "  +  bow;

}


}

const obj = {



    name : "Mehedy hasan miraj",
    age : 26,
    email: "abc@gmail.com"
}

console.log(printDetails(obj));