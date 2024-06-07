import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { krasovkiPaginationWork, selectSneakers } from '../../Store/SneakersSlice/sneakersSlice';


const KrasovkiPaginationButtons = ({number}) => {
    const dispatch = useDispatch()
    const {krasovkiData} = useSelector(selectSneakers)
    return (
      <button className={krasovkiData.index === number ? "active-krasovki" : 'x'} onClick={(e) => {dispatch(krasovkiPaginationWork(number))}}>{number}</button>
    )
}

export default KrasovkiPaginationButtons