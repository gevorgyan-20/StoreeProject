import React from 'react'
import LeftIcon from './../../Icons/BestOfTheBestIcons/leftIcon';
import RightIcon from './../../Icons/BestOfTheBestIcons/rightIcon';
import { odejdaPaginationToLeft, odejdaPaginationToRight,selectOdejda } from '../../Store/ClothesSlice/clothesSlice'
import { useDispatch, useSelector } from 'react-redux'
import './odejdaPagesPagination.css'
import ClothesPaginationButton from '../ClothesPaginationButtons/ClothesPaginationButton';


const OdejdaPagesPagination = () => {
    const {odejdaData} = useSelector(selectOdejda)
    const dispatch = useDispatch()
    const numberValue = () => {
    if(odejdaData.index <= 2) {return 2}  
    else if(odejdaData.index >= 21) {
      return 21
    } else {
      return odejdaData.index
    }
  }
  return (
    <div className='odejdaPagesPagination'>
        <div className='mainPaginationBlock'>
        <div className='navigateIcons' onClick={() => dispatch(odejdaPaginationToLeft())}>
          <LeftIcon/>
        </div>
        <div className='paginationButtons'>
          {odejdaData.index > 2 ? <button>...</button> : <ClothesPaginationButton number={1}/>}
          <ClothesPaginationButton number={numberValue()}/>
          <ClothesPaginationButton number={numberValue() + 1}/>
          <ClothesPaginationButton number={numberValue() + 2}/>
          {odejdaData.index >= 21 ? <ClothesPaginationButton number={24}/> : <button>...</button>}
          <ClothesPaginationButton number={25}/>
        </div>
        <div className='navigateIcons' onClick={() => dispatch(odejdaPaginationToRight())}>
          <RightIcon/>
        </div>
      </div>
    </div>
  )
}

export default OdejdaPagesPagination