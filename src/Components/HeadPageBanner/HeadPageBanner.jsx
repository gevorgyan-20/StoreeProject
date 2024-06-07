import React, { useState } from 'react';
import BootsImg1 from "./images/adidas-Nite-Jogger-Solar-Orange-G26313-Release-Date-2 2.png"
import BootsImg2 from "./images/22222.png"
import BootsImg3 from "./images/1111.png"
import "./headpagebanner.css"
import BannerArrowIcon from './icon/BannerArrowIcon';
import { Link } from 'react-router-dom';

const HeadPageBanner = () => {
      const [bannerImage, setBannerImage] = useState(BootsImg1)
      const imagesArray = [BootsImg1, BootsImg3, BootsImg2]
      const filterImagesArray = imagesArray.filter((el) => el !== bannerImage)
    return (
       <section className='BannerSec'>
         <div className="BannerHeaderCont">
            <div className="BannerLeftBlock">
               <h1>Adidas Nite Jogger</h1>
               <p>Городские кроссовки в ярком стиле 80-х</p>
               <button><Link to='/krasovki'>Смотреть все</Link></button>
            </div>
            <div className="BannerRightBlock">
                <div className="BRectangle">
                </div>
                 <img src={bannerImage}/>
            </div>
         </div>
         <div className="BannerBottomBlock">
           <div className='BBootsBlock1'>
             <img src={filterImagesArray[0]} alt="" />
             <p>Adidas Yeezy Boost</p>
             <div onClick={() => setBannerImage(filterImagesArray[0])}>
              <BannerArrowIcon/>
             </div>
           </div>
           <div className='BBootsBlock2'>
             <img src={filterImagesArray[1]} alt="" />
             <p>Nike Air Max</p>
             <div onClick={() => setBannerImage(filterImagesArray[1])}>
              <BannerArrowIcon/>
             </div>
           </div>
         </div>
       </section>
    );
}

export default HeadPageBanner;
