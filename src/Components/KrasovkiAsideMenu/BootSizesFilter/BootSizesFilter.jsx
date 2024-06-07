import React from "react";
import "./BootSizesFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { getAsideFilterData, selectSneakers, sneakersReducer } from "../../../Store/SneakersSlice/sneakersSlice";

const BootSizesFilter = () => {
  const Sizes = [
    {
      Small: [30, 31, 32, 33, 34],
      Medium: [35, 36, 37, 38, 39, 40],
      Big: [41, 42, 43, 44, 45, 46],
    },
  ];
  const dispatch = useDispatch()
  const { asideFilterData } = useSelector(selectSneakers);

  return (
    <div className="BootSizesFilter">
      <h1>Размер</h1>
      <div className="FSizesBlock">
        {Sizes[0].Small.map((numb) => {
          return (
            <div key={numb} className="FSizesButt" onClick={() => dispatch(getAsideFilterData({...asideFilterData, size: [...asideFilterData.size, numb]}))}>
              <span>{numb} EUR</span>
            </div>
          );
        })}
      </div>
      <div className="FSizesBlock">
        {Sizes[0].Medium.map((numb) => {
          return (
            <div key={numb} className="FSizesButt" onClick={() => dispatch(getAsideFilterData({ ...asideFilterData, size: [...asideFilterData.size, numb] }))}>
              <span>{numb} EUR</span>
            </div>
          );
        })}
      </div>
      <div className="FSizesBlock">
        {Sizes[0].Big.map((numb) => {
          return (
            <div key={numb} className="FSizesButt" onClick={() => dispatch(getAsideFilterData({ ...asideFilterData, size: [...asideFilterData.size, numb] }))}>
              <span>{numb} EUR</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BootSizesFilter;
