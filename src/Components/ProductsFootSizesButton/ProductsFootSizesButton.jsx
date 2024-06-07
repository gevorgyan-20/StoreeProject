import React from 'react'

const ProductsFootSizesButton = ({index, sizes}) => {
  return (
    <button className={sizes?.includes(index) ? "x" : "is-overed"}>{index}</button>
  )
}

export default ProductsFootSizesButton