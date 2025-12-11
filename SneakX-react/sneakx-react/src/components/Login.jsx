import {useNavigate} from 'react-router';
import {useState,useRef} from 'react';
import coverpage from '../assets/coverpage.png';
import { toast } from 'react-toastify';
const Login = () =>{
    const [userName,setuserName] = useState('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleName = (e)=>{
        setuserName(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userName==='admin' && passwordRef.current.value==='admin@123'){
            toast.success('Welcome Admin!');
            sessionStorage.setItem('loggedIn',true);
            navigate('/admin');
        }
        else if(userName === passwordRef.current.value){
            toast.success('Login Successful!');
            sessionStorage.setItem('loggedIn',true);
            navigate('/');
        }
        else{
            toast.error('Invalid Credentials');
        }
    }
    return(
        <div
            className="w-screen h-screen bg-cover bg-center flex items-center justify-between px-10"
            style={{ backgroundImage: `url(${coverpage})` }}
        >
            <div className="flex-1">
              <h1 className="font-mont text-white font-extrabold leading-tight text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-lg drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
               Find Your Next Pair 
              </h1>
            </div>
            
            <form className="border-2 border-white/20 w-96 rounded-2xl bg-black/50 backdrop-blur flex flex-col p-8 gap-4" onSubmit={(e) => handleSubmit(e)}>
                <h2 className="text-2xl text-white font-bold text-center mb-2">SneakX</h2>
                <h2 className="text-lg text-white/80 font-semibold text-center mb-6">Step into Your Style</h2>
                
                <label className="text-white text-sm font-semibold">Username</label>
                <input 
                    type="text" 
                    className="border-2 border-white/20 w-full h-10 bg-white/10 border-none rounded-lg p-2 text-white placeholder-white/50 focus:outline-none focus:bg-white/20" 
                    onChange={handleName}
                    placeholder="Enter username"
                />
                
                <label className="text-white text-sm font-semibold">Password</label>
                <input 
                    type="password" 
                    className="border-none bg-white/10 rounded-lg w-full h-10 p-2 text-white placeholder-white/50 focus:outline-none focus:bg-white/20" 
                    ref={passwordRef}
                    placeholder="Enter password"
                />
                
                <button className="text-center text-white border-none bg-red-800 w-full h-12 rounded-lg font-bold hover:bg-red-900 transition mt-4">Login</button>
                
                <div className="text-center text-white/60 text-sm">
                    <p>Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Create one</a></p>
                </div>
            </form>
        </div>
    )
}
export default Login;