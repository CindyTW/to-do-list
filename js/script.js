let d = new Date();
let today = d.toDateString();
document.getElementById("first").innerHTML = today;

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");


button.addEventListener("click", addListClick);
input.addEventListener("keypress", addListEnter);

listEvent();
btnDeleteElement();

function inputLength(){
	return input.value.length;
}

function createListElement(){
  
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button).className ="fas fa-trash-alt";
    input.value="";

    listEvent();
    btnDeleteElement();
}

function addListClick(){
	if(inputLength()>0){
	createListElement()
	}
}

function addListEnter(e){
	if(inputLength()>0 && e.which ===13){
	createListElement();
	}
}

function listEvent(){
    for(let i=0; i<li.length; i++){
        li[i].addEventListener("click",changeClass);
    }
}


function changeClass(){
    this.classList.toggle("done");
}

function btnDeleteElement(){
    let button = document.querySelectorAll("li button");
    for(let i=0; i<button.length; i++){
        button[i].addEventListener("click", clearElement);
    }
}

function clearElement(){
    for(let i=0; i<li.length; i++){
        this.parentNode.remove()
    }
}
