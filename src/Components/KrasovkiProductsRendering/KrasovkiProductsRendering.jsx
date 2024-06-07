import React from 'react'
import './krasovkiProductsRendering.css'
import { useSelector } from 'react-redux'
import EachBestSlideItem from './../EachBestSlideItem/EachBestSlideItem';
import { selectSneakers } from '../../Store/SneakersSlice/sneakersSlice';

const KrasovkiProductsRendering = () => {
    const {krasovkiData, filterData} = useSelector(selectSneakers)
  return (
    <div className='krasovkiProductsRendering'>
        {(filterData.isFiltering ? filterData.renderingArray : krasovkiData.array).map((el) => {
          return(
          <div key={el.id} style={{width: "275px", height: "351px", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <EachBestSlideItem season={el.season} category={el.category} brand={el.brand} color={el.color} size={el.size} image={el.image} description={el.description} article={el.article} price={el.price}/>
          </div>
          )
        })}
    </div>
  )
}

export default KrasovkiProductsRendering;