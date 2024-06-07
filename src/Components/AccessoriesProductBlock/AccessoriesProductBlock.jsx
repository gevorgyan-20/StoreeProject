import React from 'react'
import './accessoriesProductBlock.css'
import KrasovkiProductsMainSorting from '../KrasovkiProductsMainSorting/KrasovkiProductsMainSorting'
import AccessoriesProductsRendering from '../AccessoriesProductsRendering/AccessoriesProductsRendering'

const AccessoriesProductBlock = () => {
  return (
    <div className='accessoriesProductBlock'>
        <KrasovkiProductsMainSorting/>
        <AccessoriesProductsRendering/>
    </div>
  )
}

export default AccessoriesProductBlock