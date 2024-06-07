import React from 'react';
import "./colorsFilter.css"
import { useDispatch, useSelector } from 'react-redux';
import { getAsideFilterData, selectSneakers } from '../../../Store/SneakersSlice/sneakersSlice';

const ColorsFilter = () => {

    const Colors = ["black", "white", "#FFE1E1", "red", "#EDDED0", "cyan", "skyblue", "violet", "green", "darkgreen", "yellow", "gray"];
    const dispatch = useDispatch()
    const { asideFilterData } = useSelector(selectSneakers);

    return (
        <div className='ColorsFilter'>
            <h1>Цвет</h1>
            <div className="ColorsFiltBlock">
               {
                 Colors.map((el)=>{
                    return <span key={el} className="FColorSelect" onClick={() => dispatch(getAsideFilterData({...asideFilterData, color: el}))} style={{ background: `${el}` }}></span>;
                 })
               }
            </div>
        </div>
    );
}

export default ColorsFilter;
