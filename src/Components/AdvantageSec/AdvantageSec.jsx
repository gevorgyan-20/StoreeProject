import React from 'react';
import "./AdvantageSec.css"
import LikeIcon from './icons/LikeIcon';
import SuppIcon from './icons/SuppIcon';
import BoxIcon from './icons/BoxIcon';

const AdvantageSec = () => {
    return (
       <section className="AdvantageSec">
         <div className='AdvantageItem'>
            <span className='ALike'>
                <LikeIcon/>
            </span>
            <p>Гарантируем качество товара</p>
         </div>
         <div className='AdvantageItem'>
            <span className='ASuppIcon'>
                <SuppIcon/>

            </span>
            <p>Поможем  подобрать размер</p>       
         </div>
         <div className='AdvantageItem'>
            <span className='ABoxIcon'>
                <BoxIcon/>
            </span>
            <p>Быстро доставим покупку</p>
         </div>
       </section>
    );
}

export default AdvantageSec;
