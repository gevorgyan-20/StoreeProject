import React from 'react'
import AccessoriesProductBlock from '../../Components/AccessoriesProductBlock/AccessoriesProductBlock'
import AccessoriesPagesPagination from '../../Components/AccessoriesPagesPagination/AccessoriesPagesPagination'

const Accessories = () => {
  return (
    <div className='odejdaPage'>
        <div className='odejda-aside-products'>
          <aside style={{width: "330px",height: "2176px"}}></aside>
            <AccessoriesProductBlock/>
        </div>
        <AccessoriesPagesPagination/>
    </div>
  )
}

export default Accessories