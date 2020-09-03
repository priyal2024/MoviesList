import React from 'react';
import '../../../../scss/navigation_items.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import Input from '../../Input/Input';

const NavigationItems = () => (
    <ul className='navigationItems'>
        <NavigationItem link="/" exact>Now Playing</NavigationItem>
        <NavigationItem link="/UpcomingMovies">Upcoming</NavigationItem>
        <NavigationItem link="/LatestMovies">Latest</NavigationItem>
        <Input link="/SearchMovies" />
    </ul>
);

export default NavigationItems;