
var images = [];
images.push("qwe.jpg");
images.push("qwe1.jpg");
images.push("qwe2.JPG");


currentImage = 0;
document.querySelector("#prevButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage --;
        if(currentImage<0)
            currentImage  = images.length -1 ;
        showImage();
});

document.querySelector("#nextButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage ++;
        if(currentImage>=images.length)
            currentImage  = 0;

        showImage();

});

function showImage(){
    pc = document.getElementById('picture');
    pc.src = images[currentImage];
}
