import React, { useState } from "react";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import LoginForm from "./components/LoginForm.jsx"
import Counter from "./components/Counter.jsx";
import Productcard from "./components/ProductCart.jsx"
import Footer from "./components/Footer.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Pagination from "./components/Pagination.jsx";

const App = () =>{
    const[currentPage,setCurrentPage] = useState(()=>{
      const page = sessionStorage.getItem('page');
      return page ? parseInt(page) : 1;
    });
  return(
  <React.Fragment>
      <GlobalProvider>
          <UserDetails/>
          <Footer/>
      </GlobalProvider>
      <LoginForm/>
      <Productcard/>
  </React.Fragment>
  )
}

export default App;