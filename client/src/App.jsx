import React from 'react'
import { Routes,Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './pages/index/Home';
import Cartpage from './pages/cart/Cartpage';
import Dishes from './pages/food/Dishes';
import Details from './pages/food/Details';
import ChonKhauPhan from './pages/tuvan/ChonKhauPhan';
import About from './pages/about/About';
import Message from './components/Message/message';
import Buyfoodparadise from './components/Message/buyfoodparadise';
import ScrollToTop from './until/scroll';
import Odercart from './pages/cart/Odercart';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import { UserProvider } from './until/userContext';

export default function App() {
  return (
    <div className='app'>
      <UserProvider>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/detail' element={<Details/>}/>
        <Route path='/DangKy' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/DangNhap' element={<Login/>}/>
        <Route path='/chonkhauphan' element={<ChonKhauPhan/>}/>
        <Route path='/detail/:ma_mon_an' element={<Details/>}/>
        <Route path='/donhang' element={<Odercart/>}/>
        </Routes>
      <Message/>
      <Buyfoodparadise/>
      <Footer/>
      </UserProvider>
     
    </div>
  )
}
