

//in the case of multiple condition

function isValidPhotoName (photoName, imageExtensions){

if(typeof photoName !=="string" || !Array.isArray(imageExtensions)){


    return "please provide valid inputs"
}

else{


    for (let item of imageExtensions){

if(photoName.toLowerCase().endsWith(item.toLowerCase())){

    return true;
}

 }
    return false;
}

}

const photoName = "image.jpg";
const imageExtensions = [".jpg" ,"JPEG", "jpeg", ".gif" ,"png", "ico"];
console.log(isValidPhotoName(photoName, imageExtensions));



















function isValidVideoName(video, videoExtensions){

if(typeof video !=="string" ||  !Array.isArray(videoExtensions)){

return "please provide valid inputs"

} else {


    for(let item of videoExtensions){

        if(video.toLowerCase().endsWith(item.toLowerCase())){
    
            return true;
        }
    }
    
    return false;
}

}

const video = "video.mp3";
const videoExtensions =[".mp3" , ".mp4", ".mp5", ".mp6"]

console.log(isValidVideoName(video,videoExtensions));