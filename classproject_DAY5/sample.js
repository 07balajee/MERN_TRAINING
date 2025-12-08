import {add,sub,mul,pi,print} from './math.js';

//rest operator
const arr=[1,2,3,4,5];
const[a,...rest]=arr;
console.log(rest);

const person={name:'john' , age:40, height:177,weight:71};
const{name , age ,height:h,weight:w}=person;
const{name: n, ...rest1}=person;
console.log(h);
console.log(w);
console.log(rest1);

console.log(add(5,10));
console.log(sub(10,5));
console.log(mul(5,10));
console.log(pi);
print(100);


//settimeout
console.log('start');
setTimeout(()=>
{
    console.log('inside');
},3000);
console.log('end');

//promise
const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(100);
    },3000);
});
p1.then((res)=>{
    console.log("Promise resolved:",res);
}).catch((err)=>{
    console.log("Promise rejected:",err);
})
console.log(p1);

let z=11;
const p2=new Promise((resolve,reject)=>{
    if(z%2===0){
        resolve("even");
    }else{
        reject("odd");
    }
})

p2.then((res)=>{
    console.log("A is EVEN");
}).catch((err)=>{
    console.log("A is ODD");
})

//checking using function

const checkEvenOdd=()=>{
    return new Promise((resolve,reject)=>{
        let r=99;
        if(r%2===0){
            resolve("even");
        }else{
            reject("odd");
        }
    })
}
 checkEvenOdd().then((res)=>{
    console.log("R is even");
 }).catch((err)=>{
    console.log("R is odd");
 })

 //check if a number is less than 10
 const checkLessThan10=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num<10){
            resolve("Less than 10");
        } else {
            reject("Not less than 10");
        } 
    })
 }

 checkLessThan10(100).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log((err));  
 })

 //promise chaining
const num=10;
const checkEven=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("Even number");
        } else {
            reject("Odd number");
        }
    })
}

 checkEven(a).then((res)=>{
    console.log(res);
    return checkLessThan10(a);
 }).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log(err);
 })
//another example
 checkEven(15).then((res)=>{
    console.log(res);
    return checkLessThan10(15);
 }).catch((err)=>{
    console.log(err);
 }).then((res)=>{
    console.log("Execution completed");
 }).catch((err)=>{
    console.log("Execution completed with error");
 });

//async await
const checkConditions = async()=>{
    let a = 10;
    try{
        console.log('STARTING...');
        const res1 = await checkEven(a);
        console.log(res1);
        const res2 = await checkLessThan10(a);
        console.log(res2);
    }catch(err){
        console.log(err);
    }
    try{
        const res3 = await checkLessThan10(15);
        console.log(res3);
    }catch(err){
        console.log(err);
    }
}
checkConditions();


//fetch api

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        console.log(res);
        return res.json();
    }).then(json=>{
        console.log(json);
    }).catch((err)=>{
        console.log(err);
    })

// fetch using async await
const fetchData = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await res.json();
        console.log(json);
    }catch(err){
        console.log(err);
    }
}
fetchData();