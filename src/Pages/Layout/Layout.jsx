import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMain from '../../Components/NavMain/NavMain'
import Footer from '../../Components/Footer/Footer'

function Layout() {
  return (
    <div>
        <NavMain/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout