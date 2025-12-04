const inc=document.getElementById("increase");
const dec=document.getElementById("decrease");
const count=document.getElementById("count");

inc.addEventListener("click", () => {
    count.innerHTML=Number(count.innerHTML) + 1
});
dec.addEventListener("click", () => {
    if(count.innerHTML>0)count.innerHTML=Number(count.innerHTML) - 1;
});