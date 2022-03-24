// The object should have properties for:

// An array called photoList that contains the names of the photos as strings
const photoShow={ 
    photoList: ["photo1","photo2","photo3"],
// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 0,
// A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:
    nextphoto: function(){
        if(this.currentPhotoIndex<this.photoList.length-1){
            return this.photoList[this.currentPhotoIndex+=1];//  logs the current photo name.
        }
    // 4. Otherwise, log "End of slideshow";
        else{
            return "End of slideshow";
        }
    },
// A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function(){
        if(this.currentPhotoIndex>0){
            return this.photoList[this.currentPhotoIndex-=1];
        }
        else{
            return "Beginning of slideshow";
        }
    },
// A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    }
}
console.log(photoShow.getCurrentPhoto());
console.log(photoShow.nextphoto());
console.log(photoShow.nextphoto());
console.log(photoShow.nextphoto());
console.log(photoShow.getCurrentPhoto())
console.log(photoShow.prevPhoto());
console.log(photoShow.prevPhoto());
console.log(photoShow.prevPhoto());


