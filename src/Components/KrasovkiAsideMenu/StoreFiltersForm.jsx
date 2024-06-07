import React from 'react';
import SeasonFilter from './SeasonFilter/SeasonFilter';
import BootSizesFilter from './BootSizesFilter/BootSizesFilter';
import "./StoreFiltersForm.css";
import PriceFilter from './PriceFilter/PriceFilter';
import ColorsFilter from './ColorsFilter/ColorsFilter';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import BrandsFilter from './BrandsFilter/BrandsFilter';
import FilterFormButtons from './FilterFormButtons/FilterFormButtons';
import { useDispatch } from 'react-redux';
import { filteringShoes } from '../../Store/SneakersSlice/sneakersSlice';

const StoreFiltersForm = () => {
   const dispatch =useDispatch()
    return (
       <form className='StoreFiltersForm' onSubmit={(e) => {e.preventDefault(); dispatch(filteringShoes())}}>
          <BootSizesFilter/>
          <SeasonFilter/>
          <PriceFilter/>
          <ColorsFilter/>
          <CategoryFilter/>
          <BrandsFilter/>
          <FilterFormButtons/>
       </form>
    );
}

export default StoreFiltersForm;
