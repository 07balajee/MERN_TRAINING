// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import HomeLayout from './Layouts/HomeLayout.jsx'
import Login from './components/Login.jsx'
import ProductList from './components/ProductList.jsx'
import ProductDetails from "./components/ProductDetails.jsx"
import Blogs from './components/BlogList.jsx'
import BlogDetails from './components/BlogDetails.jsx'
import Admin from './components/Admin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
           <Route element={<HomeLayout/>}>
             <Route path='/' element={<App/>}/>
             <Route path="/products">
                <Route index element={<ProductList />} />
                <Route path=":id" element={<ProductDetails />}/>
             </Route>
             <Route path ='/blogs'>
                <Route index element={<Blogs/>}/>
                <Route path=':id' element={<BlogDetails/>}/>
             </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/home' element={<Home/>}/>
           </Route>
           <Route path='/login' element={<Login/>}/>
           <Route path='/admin' element={
            <ProtectedRoute>
                <Admin/>
            </ProtectedRoute>
           }
           />
      </Routes>
    </BrowserRouter>
)
