import React from 'react';
import VkIcon from './Icons/VkIcon';
import WhatsapIcon from './Icons/WhatsapIcon';
import TelegramIcon from './Icons/TelegramIcon';
import ViberIcon from './Icons/ViberIcon';
import InstIcon from './Icons/InstIcon';

const UserAdressForm = () => {
    return (
        <div className='UserAddressForms'>
            <form className='UAddressForm'>
               <h1>Адрес доставки и контакты</h1>
                <input type="text" placeholder='Страна' />
                <input type="text" placeholder='Город' />
                <input type="text" placeholder='Улица' />
                <div className="UAddressNumb">
                    <input type="number" name="" id=""/>
                    <input type="number" name="" id=""/>
                    <input type="number" name="" id=""/>
                </div>
                <input type="number" placeholder='' />
            </form>
            <form className="UserContact">
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="tel" placeholder='Phone Number'/>
                <div className="UContactWebSite">
                 <h1>Выберите удобный способ связи</h1>
                 <div>
                 <VkIcon/>
                 <WhatsapIcon/>
                 <TelegramIcon/>
                 <ViberIcon/>
                 <InstIcon/>
                 </div>
                </div>
                <input type="url" name="" id="" placeholder='Contact URL' />
            </form>
        </div>
    );
}

export default UserAdressForm;
