import React from 'react'
import './eachProductBuyingSizes.css'

const EachProductBuyingSizes = () => {
    const size = [
        {eur: 40, cm: 25},
        {eur: 41, cm: 26},
        {eur: 42, cm: 26.5},
        {eur: 43, cm: 27.5},
        {eur: 44, cm: 28},
        {eur: 45, cm: 29},
        {eur: 46, cm: 30}
    ]

  return (
    <div className='eachProductBuyingSizes'>
        <div className='sizesTitle'>
            <span>ВЫБЕРИТЕ РАЗМЕР</span>
        </div>
        <div className='allSizes'>
        {size.map((size) => {
            return(
            <div key={size.eur} className='eachSize'>
                <div className='sizeEUR'>{size.eur} EUR</div>
                <div className='sizeCM'>({size.cm}cm)</div>
            </div>   
            )
        })}
        </div>
    </div>
  )
}

export default EachProductBuyingSizes