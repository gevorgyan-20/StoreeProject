import React from 'react'
import './eachProductDescriptionMenu.css'

const EachProductDescriptionMenu = ({description, category, model, season, color, typeOfAccessories}) => {
  return (
    <div className='eachProductDescriptionMenu'>
        <div className='eachDescriptionMenu'>
            <button>Description</button>
            <button>Order</button>
            <button>Exchange and return</button>
            <button>Guarantees</button>
            <button>About Product</button>
        </div>
        <div className='eachDescription'>
            <div className='description'>{description}</div>
            <div className='filterParams'>
                {category && <div>Category: <span>{category}</span></div>}
                {model && <div>Model: <span>{model}</span></div>}
                {season && <div>Season: <span>{season}</span></div>}
                {color && <div>Color: <span>{color}</span></div>}
                {typeOfAccessories && <div>Type Of Accessories: <span>{typeOfAccessories}</span></div>}
            </div>
        </div>
    </div>
  )
}

export default EachProductDescriptionMenu