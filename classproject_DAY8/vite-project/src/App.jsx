import React, { useState } from "react";
import StudentCard from "./components/StudentCard.jsx";
import Counter from "./components/Counter.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Pagination from "./components/Pagination.jsx";

const App = () =>{
    const[currentPage,setCurrentPage] = useState(1);

    let firstName = "John";
    let lastName = "Doe";
    let age = 25;
  return(
  <React.Fragment>
      
      <h1 className="font-bold text-6xl text-center mb-4 ">Name Details</h1>
      {StudentCard({fName:firstName,lName:lastName, age:age})}
      <StudentCard fName={firstName} lName={lastName} age={age}/>
      <Counter/>
      <UserDetails currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </React.Fragment>
  )
}

export default App;