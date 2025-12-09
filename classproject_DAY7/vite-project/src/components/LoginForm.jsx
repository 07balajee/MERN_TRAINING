import {useState,useRef} from "react";

const LoginForm = () => {
       const[username,setUserName]=useState('');
       const handleNameChange = (e)=>{
        setUserName(e.target.value);
       }
       const passwordRef = useRef("");
       
       const handlesubmit = (e)=>{
        e.preventDefault();
           console.log(username,passwordRef.current.value);
       } 

    return(
        <>
            <div className="w-[300px] bg-gray-500 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center justify-center mt-4 mb-50">
                <h1 className="text-xl mb-2">Login Form</h1>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
                value={username} onChange={handleNameChange}/>
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full}"
                ref = {passwordRef}/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-20" onClick={handlesubmit}>Login</button>
            </div>

        </>
    )
}
export default LoginForm;