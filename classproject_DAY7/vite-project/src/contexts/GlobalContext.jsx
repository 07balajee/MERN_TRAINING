import { createContext,useState } from "react";


const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const {children} = props;
    const[currentPage,setCurrentPage] = useState(()=>{
          const page = sessionStorage.getItem('page');
          return page ? parseInt(page) : 1;
        });
    return(
        <GlobalContext.Provider value = {{currentPage,setCurrentPage}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;