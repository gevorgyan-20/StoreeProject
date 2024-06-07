import React from 'react'
import './eachProductImagesBlock.css'

const EachProductImagesBlock = ({image}) => {
  return (
    <div className='eachProductImagesBlock'>
      <div className='mainProductImage'>
        <img src={image} />
      </div>
      <div className='anotherProductImages'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default EachProductImagesBlock