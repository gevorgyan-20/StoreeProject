import React from 'react';
import './priceFilter.css'

const PriceFilter = () => {
    return (
        <div className='PriceFilter'>
            <h1>Цена</h1>
            <div className="PriceSelect">
                <input type="range" min="0" max="100000"  />
            </div>
        </div>
    );
}

export default PriceFilter;
