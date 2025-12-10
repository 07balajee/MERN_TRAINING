import {Navigate} from 'react-router';
const ProtectedRoute = ({children}) =>{
    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to='/Login'/>;
    }
}
export default ProtectedRoute;