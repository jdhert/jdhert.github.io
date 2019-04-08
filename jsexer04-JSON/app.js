/* app.js */


//alert("ok");


window.onload = init;

function init(){
    document.querySelector("#save").onclick = jojang; 
}

function jojang(){
    //console.log("in jojang");
    ln = document.querySelector("#lastname").value;
    fn = document.querySelector("#firstname").value;
    phone = document.querySelector("#phonenumber").value;

    //console.log(ln);
    //console.log(fn);
    //console.log(phone);

    tb = document.querySelector("#datax");
    mtr = document.createElement("tr");
    /*
    //short but difficult when too many data;
    mtr.innerHTML = "<td>"+ ln +"</td><td>" 
                            +fn + "</td><td>" 
                            + phone + "</td>";*/
   
   //this method is easy to understand
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td1.innerText = ln;
    td2.innerText = fn;
    td3.innerText = phone;
    td4.classList = "text-center";
    td4.innerHTML = "<img onclick='sakje(this);' src='images/delete.svg'/>";

    mtr.append(td1);
    mtr.append(td2);
    mtr.append(td3);
    mtr.append(td4);
    tb.append(mtr);
}

function sakje(obj){
    //console.log(obj);
    obj.parentNode.parentNode.remove();

}