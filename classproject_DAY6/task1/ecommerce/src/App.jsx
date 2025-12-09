import { useState } from 'react'
import  Card from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

const App = () =>{
       return ( <>
        <NavBar/>
        <Card/>
        <Footer/>
        </>
       );
}

export default App;