import React from "react";
import "./genderOfOdejda.css";
import { useDispatch, useSelector } from "react-redux";
import { getOdejdaAsideFilterData, selectOdejda } from "../../Store/ClothesSlice/clothesSlice";

const GenderOfOdejda = () => {
  const Genders = ["male", "female"]
  const dispatch = useDispatch()
  const {asideFilterData} = useSelector(selectOdejda)

  return (
    <div className="SeasonFilter">
      <h1>Пол</h1>
      <div className="SFilterBlock">
        {Genders.map((el) => {
          return (
            <div key={el} className="SeasonSelect">
              <input type="checkbox" onChange={() => dispatch(getOdejdaAsideFilterData({ ...asideFilterData, gender: el }))} />
              <p>{el}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenderOfOdejda;
