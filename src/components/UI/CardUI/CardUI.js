import React from 'react';
import '../../../scss/card.scss';

const CardUI = (props) => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={"https://image.tmdb.org/t/p/w500" + props.moviePoster} alt='movie' className="card-img-top" />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <a href='#' className='btn btn-outline-success' onClick={props.handleClick}>Movie Details</a>
            </div>
        </div>
    );
}
export default CardUI;