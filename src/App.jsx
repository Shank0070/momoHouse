import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllergyAdvice from './pages/AllergyAdvice'
import Contact from './pages/Contact'
import OurMenu from './pages/OurMenu'
import OurService from './pages/OurService'
import About from './pages/About'
import Navigation from './NavBar/Navigation'
import ProductDescription from './pages/ProductDescription'
import CartPage from './pages/CartPage'
import Payment from './pages/Payment'
import Success from './pages/Success'
import Failure from './pages/Failure'
import LogIn from './pages/Login'


import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'



function App() {
  return (
    <div>
      <Navigation/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allergyAdvice" element={<AllergyAdvice/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/ourMenu" element={<OurMenu/>}/>
        <Route path="/ourService" element={<OurService/>}/>
        <Route path="/cartPage" element={<CartPage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/failure" element={<Failure/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
       
      
        
        <Route path="/productDescription/:id" element={<ProductDescription/>}/>
        
      </Routes>

      

    </div>
  )
}

export default App
