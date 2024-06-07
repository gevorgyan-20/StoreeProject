import React from 'react'
import './eachProductBuyingBlock.css'
import EachProductBuyingSizes from '../EachProductBuyingSizes/EachProductBuyingSizes'

const EachProductBuyingBlock = ({price}) => {
  return (
    <div className='eachProductBuyingBlock'>
      <div className='eachProductPrice'>
        <span>{price} EUR</span>
      </div>
      <EachProductBuyingSizes/>
      <div className='buyingButtons'>
        <button>В корзину</button>
        <button className='buyNow'>Купить сейчас</button>
      </div>
    </div>
  )
}

export default EachProductBuyingBlock