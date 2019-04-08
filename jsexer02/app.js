

window.onload = function(){

    document.querySelector("#numberOnly").onkeypress=function(ev){
        if(!ev)
        ev = window.event;
        if(ev.keyCode<48 || ev.keyCode >57)
            ev.preventDefault();
    }
}
