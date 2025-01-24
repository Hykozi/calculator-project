const div = document.querySelector("div#container");

const span = document.querySelector("span");


let message = document.querySelector("div#message");

const bttn = document.querySelector('div#message button');

var display = document.getElementById("display");



function change(){
    message.style.display = 'none';
    div.style.display = 'flex';
}


function toggleremove(){
    div.style.display = 'none';
    message.style.display = 'flex';
    message.style.animation = 'animation 1.5s cubic-bezier(.48,-0.01,0,1)';
}


function clearData(){
    display.value = "";
}

function append(data){
    display.value += data;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Invalid";
    }
}