import {useContext, useState} from 'react';
import GlobalContext from '../contexts/GlobalContext';

const Pagination = () =>{
    const {currentPage,setCurrentPage}=useContext(GlobalContext);
    
    const handlePrevious = () =>{
        setCurrentPage(currentPage-1);
        sessionStorageStorage.setItem("page", currentPage-1);
    }
    const handleNext = ()=>{
        setCurrentPage(currentPage+1);
        sessionStorage.setItem("page", currentPage+1);
    }
    return(
        <div className=" w-[300px] bg-green-50 m-4 mx-auto p-4 rounded-md shadow-lg flextext-red-700 ">
            <h1 className="text-xl text-center mb-4 ">Pagination Component</h1>
            <p className="text-xl mb-2 text-center">{currentPage}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrevious}> {"<"}</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md translate-x-28" onClick={handleNext}> {">"}</button>
        </div>
    )
}
export default Pagination;