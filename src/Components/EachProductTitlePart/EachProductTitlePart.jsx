import React from 'react'
import './eachProductTitlePart.css'

const EachProductTitlePart = ({title, article}) => {
  return (
    <div className='eachProductTitlePart'>
        <div className='eachProductTitle'>
            <span>{title}</span>
        </div>
        <div className='eachProductArticul'>
            <span>{article}</span>
        </div>
    </div>
  )
}

export default EachProductTitlePart