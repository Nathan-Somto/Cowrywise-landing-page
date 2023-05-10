import React from 'react'
import {  Routes, Route, useLocation} from 'react-router-dom'

import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Loader from '../Components/Loader'
import { AnimatePresence } from 'framer-motion'


function Pages() {
const location = useLocation();
 console.log(location);
  return (
    <AnimatePresence mode='wait'>
     <Routes key={location.pathname} location={location} >
        <Route path='/' element={<Loader/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </AnimatePresence>
  
   
  
  )
}

export default Pages;