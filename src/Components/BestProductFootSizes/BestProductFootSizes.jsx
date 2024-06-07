import React from 'react'
import './bestProductFootSizes.css'
import ProductsFootSizesButton from '../ProductsFootSizesButton/ProductsFootSizesButton'

const BestProductFootSizes = ({sizes}) => {
  const array = ["35 EUR", "36 EUR", "37 EUR", "38 EUR", "39 EUR", "40 EUR", "41 EUR"]
  return (
    <div className='bestProductFootSizes'>
        {array.map((el) => <ProductsFootSizesButton key={el} index={el} sizes={sizes}/>)}
    </div>
  )
}

export default BestProductFootSizes