import React from 'react';
import NowPlaying from '../NowPlaying/NowPlaying';
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies';
import LatestMovies from '../LatestMovies/LatestMovies';
import Navbar from '../../components/UI/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import SearchMovie from '../../containers/SearchMovie/SearchMovie';

const Layout = () => {
    let location = useLocation();
    let component = [];
    if(location.pathname === '/')
    {
        component.push(<NowPlaying/>);
    }
    else if(location.pathname === '/UpcomingMovies')
    {
        component.push(<UpcomingMovies/>);
    }
    else if(location.pathname === '/LatestMovies'){
        component.push(<LatestMovies/>);
    }
    else{
        component.push(<SearchMovie/>);
    }
    
    return(
        <div>
            <Navbar />
            <div>{component}</div>
        </div>
    );
}
export default Layout;