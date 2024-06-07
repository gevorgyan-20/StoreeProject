import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { odejdaPaginationWork, selectOdejda } from '../../Store/ClothesSlice/clothesSlice'

const ClothesPaginationButton = ({number}) => {
    const dispatch = useDispatch()
    const {odejdaData} = useSelector(selectOdejda)
    return (
      <button className={odejdaData.index === number ? "active-krasovki" : "x"} onClick={(e) => {dispatch(odejdaPaginationWork(number))}}>{number}</button>
    )
}

export default ClothesPaginationButton