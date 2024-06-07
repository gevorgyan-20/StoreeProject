import React from 'react'
import './odejdaProductBlock.css'
import KrasovkiProductsMainSorting from './../KrasovkiProductsMainSorting/KrasovkiProductsMainSorting';
import OdejdaProductsRendering from '../OdejdaProductsRendering/OdejdaProductsRendering';

const OdejdaProductBlock = () => {
  return (
    <div className='odejdaProductBlock'>
        <KrasovkiProductsMainSorting/>
        <OdejdaProductsRendering/>
    </div>
  )
}

export default OdejdaProductBlock