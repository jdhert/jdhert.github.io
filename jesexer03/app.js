window.onload = function(){

    document.querySelector("#b_add").onclick = function()
    {
        let text = document.querySelector("#city").value;
        let list = document.querySelector("#myList");
        let opt = document.createElement("option");
        opt.innerText = text;
        list.appendChild(opt);
    }
    document.querySelector("#b_delete").onclick = function()
    {
        let list = document.querySelector("#myList");
        list.remove(0);
    }
}