import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeFilteringOdejda, getOdejdaAsideFilterData, selectOdejda } from '../../Store/ClothesSlice/clothesSlice';

const FilterFormButtonsOfOdejda = () => {
  const dispatch = useDispatch()
  const {asideFilterData} = useSelector(selectOdejda)

  return (
    <div className="FilterFormButtons">
      <div className="FilterSale">
        <input type="checkbox" onChange={(e) => dispatch(getOdejdaAsideFilterData({ ...asideFilterData, sale: e.target.checked }))} />
        <p>Sale</p>
      </div>

      <div className="FilterSubmitButtons">
        <button className="FiltEnterButt">Применить</button>
        <button className="FiltCancelButt" onClick={() => dispatch(closeFilteringOdejda)}>
          Отменить
        </button>
      </div>
    </div>
  );
}

export default FilterFormButtonsOfOdejda