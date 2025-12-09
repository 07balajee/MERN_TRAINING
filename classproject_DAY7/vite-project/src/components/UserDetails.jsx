import { useContext,useState,useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";

const UserDetails = () =>{
    const {currentPage}= useContext(GlobalContext);
    const[UserData,setUserData] = useState({})
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`);
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setUserData(data);
        }
        fetchData();
    }, [currentPage]);

    return(
        <div className = "w-[400px] bg-blue-50 m-4 mx-auto p-4 rounded-md shadow-lg">
            <h1 className="text-2xl text-center mb-4">User Details</h1>
            {loading ? <p>Loading...</p> : <p className="font-bold">{UserData.name}</p>}
        </div>
    )
}

export default UserDetails;