import React from 'react'
import './eachProduct.css'
import EachProductTitlePart from '../../Components/EachProductTitlePart/EachProductTitlePart'
import EachProductMainBlock from '../../Components/EachProductMainBlock/EachProductMainBlock'
import EachProductDescriptionMenu from '../../Components/EachProductDescriptionMenu/EachProductDescriptionMenu'
import TheBestOfTheBest from './../../Components/TheBestOfTheBest/TheBestOfTheBest';
import { useLocation } from 'react-router-dom'

const EachProduct = () => {
  const location = useLocation()
  return (
    <div className='eachProductPage'>
        <EachProductTitlePart title={location.state.desc} article={location.state.article}/>
        <EachProductMainBlock img={location.state.img} price={location.state.price} />
        <EachProductDescriptionMenu description={location.state.desc} category={location.state.category} color={location.state.color} model={location.state.model} season={location.state.season}/>
        <TheBestOfTheBest/>
    </div>
  )
}

export default EachProduct