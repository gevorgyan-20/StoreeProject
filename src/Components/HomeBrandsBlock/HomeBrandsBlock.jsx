import React, { useState } from 'react'
import BrandsSlideTitle from '../BrandsSlideTitle/BrandsSlideTitle';
import LeftIcon from '../../Icons/BestOfTheBestIcons/leftIcon';
import RightIcon from '../../Icons/BestOfTheBestIcons/rightIcon';
import './homeBrandsBlock.css'
import image2 from '../../Images/BrandsSliderImages/1.png'
import image1 from '../../Images/BrandsSliderImages/2.png'
import image3 from '../../Images/BrandsSliderImages/3.png'
import image4 from '../../Images/BrandsSliderImages/4.png'
import image5 from '../../Images/BrandsSliderImages/5.png'
import image6 from '../../Images/BrandsSliderImages/6.png'


function HomeBrandsBlock() {
  const [array, setArray] = useState([4,5,0,1,2,3,4,5,0])

  const brandsData = [
    {id: 1, image: image1, name: "porsche"},
    {id: 2, image: image2, name: "newBalance"},
    {id: 3, image: image3, name: "nike"},
    {id: 4, image: image4, name: "puma"},
    {id: 5, image: image5, name: "vans"},
    {id: 6, image: image6, name: "reebok"}
  ]

  const toRight = () => {
    const newArray = [...array]
    if(newArray[0] !== 0) {newArray.unshift(newArray[0] - 1)}
    else {newArray.unshift(5)}
    newArray.pop()
    setArray(newArray)
  }

  const toLeft = () => {
    const newArray = [...array]
    if(newArray[newArray.length - 1] !== 5) {newArray.push(newArray[newArray.length - 1] + 1)}
    else {newArray.push(0)}
    newArray.shift()
    setArray(newArray)
  }

  return (
    <div className='homeBrandsBlock'>
      <BrandsSlideTitle/>
      <div className='homeBrandsBlockSlider'>
        <div onClick={toLeft}>
        <LeftIcon/>
        </div>
        <div className='BrandsSliderBody'>
      <div className='sliderMoovingBody'>
      {array.map((el) => {
        return(
          <div key={Math.random()} className='eachBrandsItem'>
            <img className={brandsData[el].name} src={brandsData[el].image}/>
          </div>
        )
      })}
      </div>
      </div>
      <div onClick={toRight}>
        <RightIcon/>
      </div>
    </div>
    </div>
  )
}

export default HomeBrandsBlock;