document.querySelector("#redBox").onclick = function(){
    console.log("red is ok");
    document.getElementById("title").style.color = "#f00";
}
document.querySelector("#blueBox").addEventListener("dblclick",function(){
    console.log("blue is ok");
    document.getElementById("title").style.color = "#00f";
})
document.getElementByID("#greenBox").onclick = function(){
    console.log("red is ok");
    document.getElementById("title").style.color = "#0f0";
}