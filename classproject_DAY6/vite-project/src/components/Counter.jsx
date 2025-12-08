import {useState} from 'react';
import {useEffect} from 'react';

const Counter = () =>{
    const [count,setCount]=useState(0);
    let increment = () =>{
        setCount(count + 1);
        console.log(count);
    }
    let decrement= ()=>{
        if(count>0)
        setCount(count-1);
    }
    const [count1,setCount1]=useState(0);
    let increment1 = () =>{
        setCount1((prevCount) => prevCount + 1);
        console.log(count1);
    }
    let decrement1 = () =>{
        setCount1((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }
    useEffect(()=>{
        console.log("Component Mounted for 0");
    }, [count])
    useEffect(()=>{
        console.log("Component Mounted for 1");
    }, [count1]);
    return(
        <div className=" w-[300px] bg-yellow-50 m-4 mx-auto p-4 rounded-md shadow-lg flextext-red-700 ">
        <h1 className="text-xl text-center ">Counter Component</h1>
        <p className="text-xl mb-2 text-center">{count}</p>
        <div className=" flex gap-8 justify-center ">
            <button className="bg-green-500 p-2 rounded-md  items-center" onClick={increment}>Increment</button>
            <button className="bg-red-500 p-2 rounded-md items-center" onClick={decrement}>Decrement</button>
        </div>
        <p className="text-xl mb-2 text-center">{count1}</p>
        <div className=" flex gap-8 justify-center ">
            <button className="bg-green-500 p-2 rounded-md  items-center" onClick={increment1}>Increment</button>
            <button className="bg-red-500 p-2 rounded-md items-center" onClick={decrement1}>Decrement</button>
        </div>
        </div>
    )
}

export default Counter;