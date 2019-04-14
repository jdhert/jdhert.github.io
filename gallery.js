

var images = [];

images.push("qwe.jpg");
images.push("qwe1.jpg");
images.push("qwe2.JPG");

currentImage = 0;


document.querySelector("#prevButton").addEventListener("click" ,
    function(){
        currentImage --;
        if(currentImage<0)
        currentimage = images.length-1;
    showImage();
    
});
document.querySelector("#nextButton").addEventListener("click" ,
    function(){
        currentImage ++;
        if(currentImage>=images.length)
            currentimage = 0;
        showImage();
});

function showImage()
{
    pc = document.getElementById('picture');
    pc.src = images[currentImage];
}
