import React from 'react';
import "./SeasonFilter.css"
import { useDispatch, useSelector } from 'react-redux';
import { getAsideFilterData, selectSneakers } from '../../../Store/SneakersSlice/sneakersSlice';

const SeasonFilter = () => {

    const Seasons = ["Демисезон","winter","summer"]

    const dispatch = useDispatch()
    const { asideFilterData } = useSelector(selectSneakers);

    return (
        <div className='SeasonFilter'>
            <h1>Сезон</h1>
            <div className="SFilterBlock">
               {
                Seasons.map((el)=>{
                    return (
                      <div key={el} className="SeasonSelect">
                        <input type="checkbox" onChange={() => dispatch(getAsideFilterData({...asideFilterData, season: el}))} />
                        <p>{el}</p>
                      </div>
                    );
                })
               }
            </div>
        </div>
    );
}

export default SeasonFilter;
