//filter
const arr8=[1,2,3,4,5];

const res1 = arr8.filter(el=>{
    return el%2==0;
});
console.log("Filtered Array:",res1);

const arr9=[10,20,'J',30,'A','V','A'];
const res2= arr9.filter(el=>{
    return isNaN(el); //typeof el !== 'number' or typeof el ==='string'
})
console.log(res2);

const arr10=[10,false,1.2,-0.7,null,'',undefined,'Hello',true];
const res3=arr10.filter(el=>(el));//Boolean(el) return's true values
console.log(res3);

//strings
const firstName='LINGA';
const lastName='RAJU';
const fullName= firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName.concat(' ',lastName));
//template literals
const fullname2 =`FullName is ${firstName} ${lastName}`;
console.log(fullname2);
console.log('Length of fullName:',fullName.length);

const str1='Hello World';
console.log(str1.length);//length
//converting case
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
//substring
console.log(str1.substring(0,5));
//split
const words= str1.split(' ');
console.log(words);
//replace
const str2='Hello World';
const newStr= str2.replace('World','Universe');
console.log(newStr);

function countwords(str10){
    return str10.split(' ').length;
}
console.log(countwords('The quick brown fox'));


//objects
const person={
    name:"John",
    age:19,
    isStudent:true
}
console.log(person.age);
//dynamic property access
const variable='name';
console.log(person[variable]);
console.log(Object.keys(person));//to return keys
console.log(Object.values(person));//to return values
console.log(Object.entries(person));//to return key value pairs

let marks={
    math:90,
    science:80,
    english:70
}
for(let i in marks){
    console.log(i + " => " + marks[i]);
}

// array of objects
let students=[
    {name:'Alice',age:20,grades:9},
    {name:'Bob',age:22,grades:8},
    {name:'Charlie',age:19,grades:7}
];
students.forEach(element => {
    console.log(element.name + " is " + element.age + " years old");
});

students.forEach(el=>{
    if(el.grades>=8){
        console.log(el.name);
    }
});
//with mappings to student names
const res5 = students.filter((el)=>el.grades>8);
const names5 = res5.map((el)=>el.name);
console.log(`${names5.join(', ')} have grades greater than 8`);

//spread operator
const obj1={
    a:1,
    b:2
}
const obj2={...obj1};
obj1.c=3;
console.log(obj1);
console.log(obj2);
//re declaration
const arr11=[1,2,3];
const arr12=[...arr11,4,5];
console.log(arr12);
//re assign
let arr13=[10,20];
arr13=[...arr13,30,40];
console.log(arr13);
//const not possible
const b=10;
b=20;
console.log(b);
x=10;
x=20;
console.log(x);
var x=10;
const user = { Name: "Alice", age: 25 };
console.log(JSON.stringify(user));
const user2 = JSON.parse('{"Name":"Alice","age":25}');
console.log(user2);