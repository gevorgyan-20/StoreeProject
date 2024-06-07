import React, { useState } from 'react';
import BootsImg1 from "./images/adidas-Nite-Jogger-Solar-Orange-G26313-Release-Date-2 2.png"
import BootsImg2 from "./images/22222.png"
import BootsImg3 from "./images/1111.png"
import "./headpagebanner.css"
import BannerArrowIcon from './icon/BannerArrowIcon';
import { Link } from 'react-router-dom';

const HeadPageBanner = () => {
      const [bannerText, setBannerText] = useState("Adidas Nite Jogger")
      const textsArray = ["Adidas Nite Jogger", "Adidas Yeezy Boost", "Nike Air Maximy"]
      const [bannerImage, setBannerImage] = useState(BootsImg1)
      const imagesArray = [BootsImg1, BootsImg3, BootsImg2]
      const filterTextsArray = textsArray.filter((el) => el !== bannerText)
      const filterImagesArray = imagesArray.filter((el) => el !== bannerImage)
    return (
       <section className='BannerSec'>
         <div className="BannerHeaderCont">
            <div className="BannerLeftBlock">
               <h1>{bannerText}</h1>
               <p>Городские кроссовки в ярком стиле 80-х</p>
               <button style={{zIndex: "999"}}><Link to='/krasovki'>Смотреть все</Link></button>
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
             <p>{filterTextsArray[0]}</p>
             <div onClick={() => {setBannerImage(filterImagesArray[0]); setBannerText(filterTextsArray[0])}}>
              <BannerArrowIcon/>
             </div>
           </div>
           <div className='BBootsBlock2'>
             <img src={filterImagesArray[1]} alt="" />
             <p>{filterTextsArray[1]}</p>
             <div onClick={() => {setBannerImage(filterImagesArray[1]); setBannerText(filterTextsArray[1])}}>
              <BannerArrowIcon/>
             </div>
           </div>
         </div>
       </section>
    );
}

export default HeadPageBanner;
