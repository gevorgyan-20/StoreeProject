import React from 'react';
import "./BootsBlogSec.css"
import BootsImg1 from "./images/Mask Group.png"
import EyeIcon from './Icon/EyeIcon';
import BlogBonusForm from './BlogBonusForm';

const BootsSBlogSec = () => {
    return (
       <section className="BootsBlogSec">
         <div className="BootsBlogLeftBlock">
          <h1 className='BBlogHead'>Блог</h1>
            <div className="BBlogBlock">
              <div>
                 <img src={BootsImg1} alt="" />
              </div>
              <div className="BBlogInf">
                  <h1>КРОССОВКИ NIKE AIR MAX 270</h1>
                  <p>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>
                  <div className="BBlogNumbersInf">
                     <i>15.01.2022</i>
                     
                     <span>
                        <EyeIcon/>
                        <b>1111</b>
                     </span>
                  </div>
                </div>
            </div>
            <div className="BBlogBlock">
              <div>
                 <img src={BootsImg1} alt="" />
              </div>
              <div className="BBlogInf">
                  <h1>КРОССОВКИ NIKE AIR MAX 270</h1>
                  <p>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>
                  <div className="BBlogNumbersInf">
                     <i>15.01.2022</i>
                     
                     <span>
                        <EyeIcon/>
                        <b>1111</b>
                     </span>
                  </div>
                </div>
            </div>
         
         </div>
            <div className="BlogBonusForm">
              <h1>Подпишись на рассылку и получи скидку до 10 %</h1>
               <BlogBonusForm/>
             
            </div>
       </section>
    );
}

export default BootsSBlogSec;
