import React from "react";
import "./FilterFormButtons.css";
import { useDispatch, useSelector } from "react-redux";
import { closeFilteringShoes, getAsideFilterData, selectSneakers } from "../../../Store/SneakersSlice/sneakersSlice";

const FilterFormButtons = () => {
  const dispatch = useDispatch();
  const { asideFilterData } = useSelector(selectSneakers);
   
  return (
    <div className="FilterFormButtons">
      <div className="FilterSale">
        <input type="checkbox" name="" id="" onChange={(e) => dispatch(getAsideFilterData({ ...asideFilterData, sale: e.target.checked }))} />
        <p>Sale</p>
      </div>

      <div className="FilterSubmitButtons">
        <button className="FiltEnterButt">Применить</button>
        <button className="FiltCancelButt" onClick={() => dispatch(closeFilteringShoes)}>Отменить</button>
      </div>
    </div>
  );
};

export default FilterFormButtons;
