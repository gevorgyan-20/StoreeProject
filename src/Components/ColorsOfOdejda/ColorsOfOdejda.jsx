import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOdejdaAsideFilterData, selectOdejda } from '../../Store/ClothesSlice/clothesSlice';

const ColorsOfOdejda = () => {
  const Colors = ["black", "white", "#FFE1E1", "red", "#EDDED0", "cyan", "skyblue", "violet", "green", "darkgreen", "yellow", "gray"];
  const dispatch = useDispatch()
  const {asideFilterData} = useSelector(selectOdejda)

  return (
    <div className="ColorsFilter">
      <h1>Цвет</h1>
      <div className="ColorsFiltBlock">
        {Colors.map((el) => {
          return (
            <span
              key={el}
              className="FColorSelect"
              style={{ background: `${el}` }} onClick={() => dispatch(getOdejdaAsideFilterData({...asideFilterData, color:el}))}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorsOfOdejda