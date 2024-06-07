import React from 'react'
import './krasovkiPagesPagination.css'
import LeftIcon from './../../Icons/BestOfTheBestIcons/leftIcon';
import RightIcon from './../../Icons/BestOfTheBestIcons/rightIcon';
import { krasovkiPaginationToLeft, krasovkiPaginationToRight, selectSneakers } from '../../Store/SneakersSlice/sneakersSlice';
import { useDispatch, useSelector } from 'react-redux';
import KrasovkiPaginationButtons from '../KrasovkiPaginationButtons/KrasovkiPaginationButtons';


const KrasovkiPagesPagination = () => {
  const {krasovkiData} = useSelector(selectSneakers)
  const dispatch = useDispatch()
  const numberValue = () => {
    if(krasovkiData.index <= 2) {return 2}  
    else if(krasovkiData.index >= 21) {
      return 21
    } else {
      return krasovkiData.index
    }
  }
  return (
    <div className='krasovkiPagesPagination'>
      <div className='mainPaginationBlock'>
        <div className='navigateIcons' onClick={() => dispatch(krasovkiPaginationToLeft())}>
          <LeftIcon/>
        </div>
        <div className='paginationButtons'>
          {krasovkiData.index > 2 ? <button>...</button> : <KrasovkiPaginationButtons number={1}/>}
          <KrasovkiPaginationButtons number={numberValue()}/>
          <KrasovkiPaginationButtons number={numberValue() + 1}/>
          <KrasovkiPaginationButtons number={numberValue() + 2}/>
          {krasovkiData.index >= 21 ? <KrasovkiPaginationButtons number={24}/> : <button>...</button>}
          <KrasovkiPaginationButtons number={25}/>
        </div>
        <div className='navigateIcons' onClick={() => dispatch(krasovkiPaginationToRight())}>
          <RightIcon/>
        </div>
      </div>
    </div>
  )
}

export default KrasovkiPagesPagination;