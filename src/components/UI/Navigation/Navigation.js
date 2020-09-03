import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import '../../../scss/navigation.scss';
import Logo from '../Logo/Logo';

const Navigation = () => (
    <div className='navContainer'>
        <Logo />
        <NavigationItems />
    </div>
);

export default Navigation;