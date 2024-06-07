import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axesuarsPaginationToLeft, axesuarsPaginationToRight, selectOaxesuars } from '../../Store/AccessoriesSlice/accessoriesSlice'
import LeftIcon from './../../Icons/BestOfTheBestIcons/leftIcon';
import RightIcon from './../../Icons/BestOfTheBestIcons/rightIcon';
import AccessoriesPaginationButtons from '../AccessoriesPaginationButton/AccessoriesPaginationButtons';


const AccessoriesPagesPagination = () => {
    const {axesuarsData} = useSelector(selectOaxesuars)
    const dispatch = useDispatch()
    const numberValue = () => {
    if(axesuarsData.index <= 2) {return 2}  
    else if(axesuarsData.index >= 21) {
      return 21
    } else {
      return axesuarsData.index
    }
  }
  return (
    <div className='odejdaPagesPagination'>
        <div className='mainPaginationBlock'>
        <div className='navigateIcons' onClick={() => dispatch(axesuarsPaginationToLeft())}>
          <LeftIcon/>
        </div>
        <div className='paginationButtons'>
          {axesuarsData.index > 2 ? <button>...</button> : <AccessoriesPaginationButtons number={1}/>}
          <AccessoriesPaginationButtons number={numberValue()}/>
          <AccessoriesPaginationButtons number={numberValue() + 1}/>
          <AccessoriesPaginationButtons number={numberValue() + 2}/>
          {axesuarsData.index >= 21 ? <AccessoriesPaginationButtons number={24}/> : <button>...</button>}
          <AccessoriesPaginationButtons number={25}/>
        </div>
        <div className='navigateIcons' onClick={() => dispatch(axesuarsPaginationToRight())}>
          <RightIcon/>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesPagesPagination