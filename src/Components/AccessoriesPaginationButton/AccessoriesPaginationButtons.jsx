import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axesuarsPaginationWork, selectOaxesuars } from '../../Store/AccessoriesSlice/accessoriesSlice'

const AccessoriesPaginationButtons = ({number}) => {
    const dispatch = useDispatch()
    const {axesuarsData} = useSelector(selectOaxesuars)
    return (
      <button className={axesuarsData.index === number ? "active-krasovki" : "X"} onClick={(e) => {dispatch(axesuarsPaginationWork(number))}}>{number}</button>
    )
}

export default AccessoriesPaginationButtons