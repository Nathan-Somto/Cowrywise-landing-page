import React from 'react'
import {  Routes, Route, useLocation} from 'react-router-dom'
import Loader from '../Components/Loader'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Notfound from './Notfound'
import { AnimatePresence } from 'framer-motion'
function Pages() {
const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
     <Routes key={location.pathname} location={location} >
        <Route path='/' element={<Loader/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages;