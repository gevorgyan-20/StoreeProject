import React from "react";
import "./odejdaAsideMenu.css";
import PriceFilter from "../KrasovkiAsideMenu/PriceFilter/PriceFilter";
import SizeOfOdejda from "../SizeOfOdejda/SizeOfOdejda";
import SeasonOfOdejda from "../SeasonOfOdejda/SeasonOfOdejda";
import CategoryOfOdejda from "../CategoryOfOdejda/CategoryOfOdejda";
import GenderOfOdejda from "../GenderOfOdejda/GenderOfOdejda";
import ColorsOfOdejda from "../ColorsOfOdejda/ColorsOfOdejda";
import FilterFormButtonsOfOdejda from "../FilterButtonsOfOdejda/FilterFormButtonsOfOdejda";
import { useDispatch } from "react-redux";
import { filteringOdejda } from "../../Store/ClothesSlice/clothesSlice";

const OdejdaAsideMenu = () => {
  const dispatch = useDispatch();

  return (
    <aside className="odejdaAside">
      <form
        className="StoreFiltersForm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(filteringOdejda());
        }}
      >
        <SizeOfOdejda />
        <SeasonOfOdejda />
        <PriceFilter />
        <CategoryOfOdejda />
        <GenderOfOdejda />
        <ColorsOfOdejda />
        <FilterFormButtonsOfOdejda />
      </form>
    </aside>
  );
};

export default OdejdaAsideMenu;
