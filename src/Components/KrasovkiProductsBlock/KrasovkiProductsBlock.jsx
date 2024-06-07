import React from 'react'
import './krasovkiProductsBlock.css'
import KrasovkiProductsMainSorting from '../KrasovkiProductsMainSorting/KrasovkiProductsMainSorting'
import KrasovkiProductsRendering from '../KrasovkiProductsRendering/KrasovkiProductsRendering'

const KrasovkiProductsBlock = () => {
  return (
    <div className='KrasovkiProductsBlock'>
      <KrasovkiProductsMainSorting/>
      <KrasovkiProductsRendering/>
    </div>
  )
}

export default KrasovkiProductsBlock