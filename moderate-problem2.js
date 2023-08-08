function gemsToDiamond(x,y,z){


if( typeof x!=="number" || typeof y !=="number" || typeof z !=="number"){

    return "please provide a number ";
}

else if(x<0 || y <0 ||z <0 ){

    return "please provide a positive number"
}

else {


    const friend1GemsCapacity = 21;
    const friend2GemsCapacity = 32;
    const friend3GemsCapacity = 43;
    
    
    const friend1TotalDiamond = x * friend1GemsCapacity;
    const friend2TotalDiamond = y * friend2GemsCapacity;
    const friend3TotalDiamond = z * friend3GemsCapacity;
    
    const friendTotalDiamond = friend1TotalDiamond + friend2TotalDiamond + friend3TotalDiamond;
    if(friendTotalDiamond >2000){
    
        return friendTotalDiamond - 2000;
    }
    else {
    
        return friendTotalDiamond;
    }
}



}

const gemsgetDiamond = gemsToDiamond(100, 5, 1);
console.log(gemsgetDiamond);