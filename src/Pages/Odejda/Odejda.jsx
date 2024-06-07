import React from 'react'
import './odejda.css'
import OdejdaProductBlock from '../../Components/OdejdaProductBlock/OdejdaProductBlock'
import OdejdaPagesPagination from '../../Components/OdejdaPagesPagination/OdejdaPagesPagination'
import OdejdaAsideMenu from '../../Components/OdejdaAsideMenu/OdejdaAsideMenu'

const Odejda = () => {
  return (
    <div className='odejdaPage'>
        <div className='odejda-aside-products'>
            <OdejdaAsideMenu/>
            <OdejdaProductBlock/>
        </div>
        <OdejdaPagesPagination/>
    </div>
  )
}

export default Odejda