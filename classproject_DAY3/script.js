var x=10;
x=true;//dynamic typing
console.log(x);
let y=20;
console.log(y);
const z=30;
console.log(z);
//function with keyword FUNCTION
function add(a,b){
    return a+b;
}
console.log(add(100,200))
//anonymous function
var sub=function(a,b){
    return a-b;
}
sub(200,100);
console.log(sub(200,100));
//arrow function
var multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(20,30));
 var divide=(a,b)=> a/b;
console.log(divide(10,5));

for(let i=1;i<=20;i++){
   if(i%2==0) console.log("Number:",i);
}
let j=2;
while(j<=20){
    console.log("Number:",j);
    j+=2;
}
let arr=[1,2,3,4,5];
arr.push("string");
console.log(arr);
arr.push(true);
console.log(arr);
arr.pop();
for(let k=0;k<arr.length;k++){
    console.log("Array Element:",arr[k]);
}
arr.unshift(10.5);
arr.unshift("1,2");
console.log(arr);
arr.shift();
function a(arg,b,c){
    console.log("Higher Order Function,",b);
    arg(c);
}
function b(c){
    console.log("Callback Function",c);
}
a(b,"Test Argument",",Another Argument");
function multiplyby(factor){
    return function(number){
        return factor *number;
    };
}
const multiplyby2=multiplyby(2);
const multiplyby5=multiplyby(5);

console.log(multiplyby2(5));
console.log(multiplyby5(5));

const arr1=[10,20,30,40,50];
arr1.forEach(elt=>{
    console.log("Element =>",elt);
});

const arr2=[1,2,3,4,5];
const newArr=[];
arr2.forEach(elt=>{
    newArr.push(elt);
});
console.log("New Array:",newArr);

const res = arr2.map(elt=>{
    return elt *2;
});
console.log("Mapped Array:",res);