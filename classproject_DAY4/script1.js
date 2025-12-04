//accessing DOM elements
const headingelement = document.getElementById("heading");
console.log(headingelement);
headingelement.innerHTML = "no heading";
headingelement.style.color='darkblue';
headingelement.style.border='2px solid black';

const btnelement = document.getElementById("btn");
document.getElementById("btn").innerHTML = "no button";

const containerElement = document.getElementsByClassName("container");
console.log(containerElement);
containerElement[0].innerHTML = "no container";
console.log(containerElement[0]);
btnelement.style.backgroundColor='lightgreen';
btnelement.style.fontSize='20px';
btnelement.addEventListener("click", function(){
    btnelement.innerHTML="clicked";
    btnelement.style.backgroundColor="yellow";

})