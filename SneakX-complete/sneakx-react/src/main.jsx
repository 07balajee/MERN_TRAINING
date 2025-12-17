
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router'
import './index.css'
import {ToastContainer} from 'react-toastify';

import ProtectedRoute from './components/ProtectedRoute.jsx';
import Admin from './components/Admin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import Home from "./components/Home.jsx";
import HomeLayout from './Layouts/HomeLayout.jsx';
import Login from "./components/Login.jsx";
import Orders from "./components/Orders.jsx";
import Cart from "./components/Cart.jsx";
import CardsListPage from "./components/CardsListPage.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import Wishlist from "./components/Wishlist.jsx";
createRoot(document.getElementById('root')).render(
    <>
     <ToastContainer />
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path='cardsList' element={<CardsListPage />}/>
                <Route path='search' element={<SearchFilter />}/>
                <Route path='wishlist' element={<Wishlist />}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='orders' element={<Orders/>}/>
                <Route path='admin' element={
                    <ProtectedRoute>
                        <AdminDashboard/>
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path='login' element={<Login/>}/>
         </Routes>
      </BrowserRouter>
    </>

)
