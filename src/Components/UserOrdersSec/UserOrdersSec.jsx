import React from 'react';
import './userOrdersSec.css';
import UordersMenu from '../UOrdersMenu/UordersMenu';


const UserOrdersSec = () => {
    return (
        <section className='UserOrdersSec'>
            <UordersMenu/>
            <div className="UOrdersBlock">
               <div className="UOrdersNameHeader">
                 <h1>Номер заказа</h1>
                 <h1>Дата</h1>
                 <h1>Предметов</h1>
                 <h1>Сумма</h1>
                 <h1>Доставлено</h1>
                 <h1>Оплачено</h1>
               </div>
               <div className="UOrdersCont">
                 <div className="UOrderItem">
                    <p className="UOrderNumb">123456789</p>
                    <p className="UOrderDate">13 августа 2020</p>
                    <p className="UOrderArticleCount">1</p>
                    <p className="UOrderPrice">3990 ₽ </p>
                    <input type="checkbox" name="DeliverydCheck" id="" />
                    <input type="checkbox" name="PaymentCheck" id="" />
                 </div>
                 <div className="UOrderItem">
                    <p className="UOrderNumb">123456789</p>
                    <p className="UOrderDate">13 августа 2020</p>
                    <p className="UOrderArticleCount">1</p>
                    <p className="UOrderPrice">3990 ₽ </p>
                    <input type="checkbox" name="DeliverydCheck" id="" />
                    <input type="checkbox" name="PaymentCheck" id="" />
                 </div>
                 <div className="UOrderItem">
                    <p className="UOrderNumb">123456789</p>
                    <p className="UOrderDate">13 августа 2020</p>
                    <p className="UOrderArticleCount">1</p>
                    <p className="UOrderPrice">3990 ₽ </p>
                    <input type="checkbox" name="DeliverydCheck" id="" />
                    <input type="checkbox" name="PaymentCheck" id="" />
                 </div>
                 <div className="UOrderItem">
                    <p className="UOrderNumb">123456789</p>
                    <p className="UOrderDate">13 августа 2020</p>
                    <p className="UOrderArticleCount">1</p>
                    <p className="UOrderPrice">3990 ₽ </p>
                    <input type="checkbox" name="DeliverydCheck" id="" />
                    <input type="checkbox" name="PaymentCheck" id="" />
                 </div>
                 <div className="UOrderItem">
                    <p className="UOrderNumb">123456789</p>
                    <p className="UOrderDate">13 августа 2020</p>
                    <p className="UOrderArticleCount">1</p>
                    <p className="UOrderPrice">3990 ₽ </p>
                    <input type="checkbox" name="DeliverydCheck" id="" />
                    <input type="checkbox" name="PaymentCheck" id="" />
                 </div>
               </div>
            </div>
        </section>
    );
}

export default UserOrdersSec;
