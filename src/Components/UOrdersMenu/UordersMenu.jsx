import React from 'react';
import { NavLink } from 'react-router-dom';
import UserIcon from './Icons/UserIcon';
import OrderIcon from "./Icons/OrderIcon"
import OrderTrackIcon from "./Icons/OrderTrackIcon"
import "./UOrderMenu.css"

const UordersMenu = () => {
    return (
        <div className="UOrdersMenu">
        <NavLink to="/profil">
            <UserIcon/>
        </NavLink>
        <NavLink to="/orders">
           <OrderIcon/>
        </NavLink>
        <NavLink to="OrderTracktion">
           <OrderTrackIcon/>
        </NavLink>
    </div>
    );
}

export default UordersMenu;
