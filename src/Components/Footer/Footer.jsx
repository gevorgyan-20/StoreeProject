import React from 'react'
import './footer.css'
import InstagramIcon from './../../Icons/FooterIcons/InstagramIcon';
import VKIcons from './../../Icons/FooterIcons/VKIcons';
import WhatsUpIcon from './../../Icons/FooterIcons/WhatsUpIcon';
import { Link } from 'react-router-dom';
import PhoneIcons from './../../Icons/FooterIcons/PhoneIcons';
import MailIcon from './../../Icons/FooterIcons/MailIcon';
import MarketIcon from './../../Icons/FooterIcons/MarketIcon';
import UserIcon from './../../Icons/FooterIcons/UserIcon';
import SerachIcon from './../../Icons/FooterIcons/SerachIcon';

const Footer = () => {
  
  return (
    <footer>
        <div className="logo" ></div>
        <div className="info">
          <div className='websites'>
            <Link to='https://www.instagram.com/'>
                <InstagramIcon/>
            </Link>
            <Link to='https://vk.com/'>
                <VKIcons/>
            </Link>
            <Link to='https://www.whatsapp.com/'>
                <WhatsUpIcon/>
            </Link>
          </div>
          <div className='mainInfo'>
            <div>
                <PhoneIcons/>
                <span>+7 951 999 28 34 </span>
            </div>
            <div>
                <MailIcon/>
                <span>info@stageboxbrand.ru</span>
            </div>
          </div>
          
        </div>
        <div className="menu">
          <button>Доставка</button>
          <button>Гарантии</button>
          <button>Таблица размеров</button>
          <button>Обмен и возврат</button>
          <button>Вопросы и ответы</button>
        </div>
        <div className="poisk">
            <div className='poisk-buttons'>
                <div>
                <MarketIcon/>
                </div>
                <UserIcon/>
            </div>
            <div className='poisk-input'>
                <form>
                    <input type="text" placeholder='Поиск'/>
                    <button>
                        <SerachIcon/>
                    </button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer