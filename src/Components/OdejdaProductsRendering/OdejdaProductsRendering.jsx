import React from 'react'
import './odejdaProductsRendering.css'
import { useSelector } from 'react-redux'
import { selectOdejda } from '../../Store/ClothesSlice/clothesSlice'
import EachBestSlideItem from '../EachBestSlideItem/EachBestSlideItem'

const OdejdaProductsRendering = () => {
    const { odejdaData, filterData } = useSelector(selectOdejda);
  return (
    <div className="odejdaProductsRendering">
      {(filterData.isFiltering ? filterData.renderingArray : odejdaData.array).map((el) => {
        return (
          <div key={el.id} style={{ width: "275px", height: "351px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <EachBestSlideItem image={el.image} description={el.description} article={el.article} price={el.price} color={el.color} category={el.category}/>
          </div>
        );
      })}
    </div>
  );
}

export default OdejdaProductsRendering;