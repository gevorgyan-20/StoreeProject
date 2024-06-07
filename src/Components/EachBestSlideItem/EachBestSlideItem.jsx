import React, { useEffect, useState } from "react";
import "./eachBestSlideItem.css";
import HeartIcon from "../../Icons/BestOfTheBestIcons/HeartIcon";
import BestProductFootSizes from "../BestProductFootSizes/BestProductFootSizes";
import { useNavigate } from "react-router-dom";

const EachBestSlideItem = ({ image, description, article, price, size, category, color, brand, season, typeOfAccessories }) => {
  const [bool, setBool] = useState(false);
  
  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);
  let timer;
  const navigate = useNavigate()

  return (
    <div
      className="bestProducts"
      onMouseEnter={() => {
        timer = setTimeout(() => {
          setBool(true);
        }, 200);
      }}
      onMouseLeave={() => {
        clearTimeout(timer);
        setBool(false);
      }}
      onClick={() => navigate('/each-product', {state: {img: image, desc: description, category: category, price: price, color: color, model: brand, article: article, season: season, typeOfAccessories: typeOfAccessories}})}
    >
      <div className="bestProductImage">
        <img src={image} />
      </div>
      <div className="bestProductTitle">
        <span>{description}</span>
      </div>
      <div className="bestProductArticul">
        <span>{article}</span>
      </div>
      <div className="bestProductBottomPart">
        <div className="bestProductCurrency">
          <span>{price} €</span>
        </div>
        <div className="bestProductLikeIcon">
          <HeartIcon />
        </div>
      </div>
      {bool && <BestProductFootSizes sizes={size}/>}
    </div>
  );
};

export default EachBestSlideItem;
