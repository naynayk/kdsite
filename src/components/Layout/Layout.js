import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import logo1 from '../../../static/KD_logotype_web.svg'  
import { useState } from 'react'
import './Layout.css'

function Layout() {
  const [showImage, setShowImage] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div style={{display: showImage ? 'inline-flex' : 'none'}} className='mainDIV'>
        <img className='mainImg' src={logo1}/>
      </div>
      <div style={{display: showImage ? 'none' : 'inline'}}>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout