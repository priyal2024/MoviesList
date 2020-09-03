import React from 'react';
import '../../../../../scss/navigation_item.scss';
import { NavLink } from 'react-router-dom';


const NavigationItem = (props) => (
    <li className='navItem'>
        <div>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName='active'>{props.children}
            </NavLink>
        </div>
    </li>
);

export default NavigationItem;