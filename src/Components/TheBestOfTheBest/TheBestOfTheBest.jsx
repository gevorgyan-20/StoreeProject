import React, { useState } from "react";
import LeftIcon from "../../Icons/BestOfTheBestIcons/leftIcon";
import RightIcon from "../../Icons/BestOfTheBestIcons/rightIcon";
import "./theBestOfTheBest.css";
import EachBestSlideItem from "../EachBestSlideItem/EachBestSlideItem";
import BestSliderPagination from "../BestSliderPagination/BestSliderPagination.jsx";
import BestsSliderTitle from "../BestsSliderTitle/BestsSliderTitle.jsx";
import { selectSneakers } from "../../Store/SneakersSlice/sneakersSlice.js";
import { useSelector } from "react-redux";

const TheBestOfTheBest = () => {
  
  const { slidersData } = useSelector(selectSneakers);
  const [sliderPosition, setSliderPosition] = useState(0);
  
  const moveSlideToRight = () => {
    if(sliderPosition > 14) {
      setSliderPosition(0)
    } else {setSliderPosition(sliderPosition + 1)}
  }

  const moveSlideToLeft = () => {
    if (sliderPosition === 0) {
      setSliderPosition(14);
    } else {
      setSliderPosition(sliderPosition - 1);
    }
  };

  return (
    <div className="theBestOfTheBest">
      <BestsSliderTitle />
      <div className="theBestOfTheBestSlider">
        <div onClick={moveSlideToLeft}>
          <LeftIcon />
        </div>
        <div className="BestSliderBody">
          <div className="slidersMoovingBody" style={{ transform: `translateX(-${sliderPosition * 285}px)`, transition: "0.4s" }}>
            {slidersData.map((el) => {
              return (
                <div key={el.id} className="eachItemHoverBlock">
                  <EachBestSlideItem season={el.season} category={el.category} brand={el.brand} color={el.color} size={el.size} image={el.image} description={el.description} article={el.article} price={el.price} />
                </div>
              )
            })}
          </div>
        </div>
        <div onClick={moveSlideToRight}>
          <RightIcon />
        </div>
      </div>
      <BestSliderPagination />
    </div>
  );
};

export default TheBestOfTheBest;
