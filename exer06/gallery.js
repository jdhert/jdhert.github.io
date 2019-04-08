

var images = [];

images.push("images/Hannibal.jpg");
images.push("images/hanniba2.jpg");
images.push("images/Hannibal.jpg");

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