import React from 'react';
import UordersMenu from '../UOrdersMenu/UordersMenu';
import "./UserOrderForm.css"
import UserInfo from './UserInfo';
import UserAdressForm from './UserAdressForm';

const UserOrderForms = () => {
    return (
      <section className="UserOrderForms">
         <UordersMenu/>
         <div className='UForms'>
            <UserInfo/>
            <UserAdressForm/>
         </div>
      </section>
    );
}

export default UserOrderForms;
