import React from 'react'
import './krasovkiPage.css'
import KrasovkiAsideMenu from '../../Components/KrasovkiAsideMenu/KrasovkiAsideMenu'
import KrasovkiProductsBlock from '../../Components/KrasovkiProductsBlock/KrasovkiProductsBlock'
import KrasovkiPagesPagination from '../../Components/KrasovkiPagesPagination/KrasovkiPagesPagination'

const KrasovkiPage = () => {
  return (
    <div className='krasovkiPage'>
        <div className='krasovki-aside-products'>
          <KrasovkiAsideMenu/>
          <KrasovkiProductsBlock/>
        </div>
        <KrasovkiPagesPagination/>
    </div>
  )
}

export default KrasovkiPage