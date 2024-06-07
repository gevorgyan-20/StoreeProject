import React from 'react'
import './eachProductMainBlock.css'
import EachProductImagesBlock from '../EachProductImagesBlock/EachProductImagesBlock'
import EachProductBuyingBlock from '../EachProductBuyingBlock/EachProductBuyingBlock'

const EachProductMainBlock = ({img, price}) => {
  return (
    <div className='eachProductMainBlock'>
        <EachProductImagesBlock image={img}/>
        <EachProductBuyingBlock price={price}/>
    </div>
  )
}

export default EachProductMainBlock