import React from 'react';
import "./brandsFilter.css"
import { useDispatch, useSelector } from 'react-redux';
import { getAsideFilterData, selectSneakers } from '../../../Store/SneakersSlice/sneakersSlice';

const BrandsFilter = () => {

    const Brands = ["Nike", "Adidas", "Reebok", "Puma", "New Balance", "Timberland", "Vans", "Converse", "Dr. Martens", "Skechers"]

    const dispatch = useDispatch()
    const { asideFilterData } = useSelector(selectSneakers);
    return (
        <div className='BrandsFilter'>
            <h1>Бренд</h1>
            <div className="FBrandsSelect">
                {
                    Brands.map((el)=>{
                        return (
                          <div key={el} className="FBrandsItem">
                            <input type="checkbox" name="" id="" onChange={() => dispatch(getAsideFilterData({ ...asideFilterData, brand: el }))} />
                            <p>{el}</p>
                          </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default BrandsFilter;
