import React from 'react';
import "./CategoryFilter.css"
import { useDispatch, useSelector } from 'react-redux';
import { getAsideFilterData, selectSneakers } from '../../../Store/SneakersSlice/sneakersSlice';

const CategoryFilter = () => {
    
    const Categoryes = ["Sneakers-with-fur", "Shoes", "Running", "Boots", "Basketball", "Sandals-and-flip-flops", "Lofers", "Mocasins", "Balets"];

    const dispatch = useDispatch()
    const { asideFilterData } = useSelector(selectSneakers);

    return (
        <div className='CategoryFilter'>
            <h1>Категория</h1>
            <div className="FCategorySelect">
               {
                Categoryes.map((el)=>{
                    return (
                      <div key={el} className="FCategoryItem">
                        <input type="checkbox" name="" id="" onChange={() => dispatch(getAsideFilterData({ ...asideFilterData, category: el }))} />
                        <p>{el}</p>
                      </div>
                    );
                })
               }
            </div>
        </div>
    );
}

export default CategoryFilter;
