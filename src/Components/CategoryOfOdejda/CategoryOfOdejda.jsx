import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOdejdaAsideFilterData, selectOdejda } from '../../Store/ClothesSlice/clothesSlice';

const CategoryOfOdejda = () => {
  const Categoryes = ["Cycling-Suits", "Anoraks", "Athletic-Pants", "Bombers", "Boxers"];
  const dispatch = useDispatch()
  const {asideFilterData} = useSelector(selectOdejda)

  return (
    <div className="CategoryFilter">
      <h1>Предмет Одежды</h1>
      <div className="FCategorySelect">
        {Categoryes.map((el) => {
          return (
            <div key={el} className="FCategoryItem">
              <input type="checkbox" onChange={() => dispatch(getOdejdaAsideFilterData({ ...asideFilterData, category: el}))} />
              <p>{el}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryOfOdejda