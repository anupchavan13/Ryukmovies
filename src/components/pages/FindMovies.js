import React from 'react';
import '../style/FindMovies.scss';
import Search from '../Search';
import Navbar from '../Navbar';
import Slider from '../Slider';

const FindMovies = () => {
    return(
        <div className='movie-container'>
        <Navbar />
        <div className='nav_cover'></div>
        <Slider />
        <Search />
        </div>
    )
}

export default FindMovies;