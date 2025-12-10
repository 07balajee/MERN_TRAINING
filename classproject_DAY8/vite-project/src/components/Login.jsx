import {useNavigate} from 'react-router';
import {useState,useRef} from 'react';
const Login = ()=>{
  const [username,setUsername]= useState('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const handleName = (e)=>{
    setUsername(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username,passwordRef.current.value);
    if(username === 'admin' && passwordRef.current.value === 'admin123'){
      sessionStorage.setItem('loggedIn', 'true');
      navigate('/admin');
    }
    else{
      alert('Invalid credentials');
    }
  }
    return(
     <>
       <div>
         <form className="w-[400px] bg-green-50 m-4 mx-auto p-4 rounded-md shadow-lg" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center mb-4">Login Form</h1>
            <input type="text" placeholder="Username" className="w-full p-2 mb-4 border border-gray-300 rounded-md" onChange={handleName}/>
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 border border-gray-300 rounded-md" ref={passwordRef}/>
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">Login</button>
         </form>
       </div>
     </>
    )
}
export default Login;