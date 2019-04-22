data = [
    {
        "id": "1",
        "name": "Samsung S7",
        "price": "2500",
    },
    {
        "id": "2",
        "name": "Samsung S8",
        "price": "3000",
    },
    {
        "id": "3",
        "name": "Samsung S9",
        "price": "4500",
    },
    {
        "id": "4",
        "name": "LG Optimus 6",
        "price": "3400",
    },
    {
        "id": "5",
        "name": "Samsung Note 8",
        "price": "4000",
    },
];
prmid = 1;
prmnm = 1;
prmpc = 1;
window.onload = init;

function init() {
    document.querySelector("#save").onclick = save1;
    document.querySelector("#idb").onclick = exchid;
    document.querySelector("#nameb").onclick = exchnm;
    document.querySelector("#priceb").onclick = exchpc;
    showData();
}

function showData() {
    tb = document.querySelector("#datax");
    tb.innerHTML = ""; 

    for (i = 0; i < data.length; i++) {
    
        mtr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        idIncome = document.createElement("input");
        nameIncome = document.createElement("input");
        priceIncome = document.createElement("input");
        idIncome.value = data[i].id;
        nameIncome.value = data[i].name;
        priceIncome.value = data[i].price;
        td1.append(idIncome);
        td2.append(nameIncome);
        td3.append(priceIncome);
        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        tb.append(mtr);
    }
}

function save1() {
    namae = document.querySelector("#name").value;
    price1 = document.querySelector("#price").value;

    let contact = new Object();
    contact.id = data.length+1;
    contact.name = namae;
    contact.price = price1;
 
    data.push(contact);
    showData();
}

function exchid(){
    if(prmid == 1){
        prmid = prmid * -1;
        idb.innerText="▲ ID";
        data.sort(function(a, b){
            return b.id - a.id;
        });
    }
    else{
        prmid = prmid * -1;
        idb.innerText="▼ ID";
        data.sort(function(a, b){
            return a.id - b.id;
        });
    }
    showData();
}
function exchpc(){
    if(prmpc == 1){
        prmpc =  prmpc * -1;
        priceb.innerText="▲ PRICE";
        data.sort(function(a, b){
            return b.price - a.price;
        });
    }
    else{
        prmpc = prmpc * -1;
        priceb.innerText="▼ PRICE";
        data.sort(function(a, b){
            return a.price - b.price;
        });
    }
    showData();
}
function exchnm() {
    if(prmnm == 1){
        prmnm = prmnm * -1;
        nameb.innerText="▲ NAME";
        data.sort(function(a, b){
            return a.name > b.name ? -1: a.name < b.name ? 1:0;
        });
    }
    else{
        prmnm = prmnm * -1;
        nameb.innerText="▼ NAME";
        data.sort(function(a, b){
            return a.name < b.name ? -1: a.name > b.name ? 1:0;
        });
    }
    showData();  
}

function Manipulate(){
    for(var i = 0; i < data.length; i++){
        idManipu = document.querySelector(
            '#datax tr:nth-child('+(i+1)+') td:nth-child(1) input '
        );
        nameManipu = document.querySelector(
            '#datax tr:nth-child('+(i+1)+') td:nth-child(2) input'
        );
        priceManipu = document.querySelector(
            '#datax tr:nth-child('+(i+1)+') td:nth-child(3) input'
        );
        data[i].id = idManipu.value
        data[i].name = nameManipu.value;
        data[i].price = priceManipu.value;
    }
}
function enterCheck(event){  
    if(event.keyCode == 13){
         Manipulate();
    }
    if(event.keyCode == 27){
        showData();
    }
}
