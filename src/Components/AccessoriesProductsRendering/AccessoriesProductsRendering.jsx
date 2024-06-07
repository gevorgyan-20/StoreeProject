import React from 'react'
import './accessoriesProductsRendering.css'
import { useSelector } from 'react-redux'
import { selectOaxesuars } from '../../Store/AccessoriesSlice/accessoriesSlice'
import EachBestSlideItem from '../EachBestSlideItem/EachBestSlideItem'

const AccessoriesProductsRendering = () => {
    const {axesuarsData} = useSelector(selectOaxesuars)
    return (
      <div className='odejdaProductsRendering'>
          {axesuarsData.array.map((el) => { 
            return(
            <div key={el.id} style={{width: "275px", height: "351px", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
              <EachBestSlideItem image={el.image} description={el.description} article={el.article} price={el.price} typeOfAccessories={el.typeOfAccessories}/>
            </div>
            )
          })}
      </div>
    )
}

export default AccessoriesProductsRendering