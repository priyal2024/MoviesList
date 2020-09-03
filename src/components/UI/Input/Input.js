import React, { useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import SearchMovie from '../../../containers/SearchMovie/SearchMovie';
import '../../../scss/input.scss';


const Input = (props) => {
    let history = useHistory();
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        history.push('/SearchMovies');
        handleSearch();

    }
    const handleSearch = () => {
        return <SearchMovie searchResult={value} />
    }
    return (
        <div className='inputContainer'>
            <input type='text' className='inputControl' placeholder='Search...' onChange={(e) => handleChange(e)} />
            <FontAwesomeIcon icon={faSearch} className='searchIcon' onClick={handleClick} />
        </div>
    );

};

export default Input;
