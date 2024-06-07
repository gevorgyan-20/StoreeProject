import React from 'react'
import './krasovkiProductsMainSorting.css'
import ArrowDownn from '../../Icons/KrasovkiIcons/ArrowDownn'

const KrasovkiProductsMainSorting = () => {
  return (
    <div className='krasovkiProductsMainSorting'>
        <div className='sortingBy'>
            <span>Сортировка</span>
            <button>по умолчанию <ArrowDownn/></button>
        </div>
        <div className='sortingCount'>
            <span>Количество</span>
            <div>
                <button>18</button>
                <button>30</button>
                <button>60</button>
            </div>
        </div>
    </div>
  )
}

export default KrasovkiProductsMainSorting