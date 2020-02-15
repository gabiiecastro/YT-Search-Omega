import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

function SearchBar({ onFormSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');
    //const [onFormSubmit, setOnFormSubmit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();     
        // setSearchTerm(searchTerm);    
		onFormSubmit(searchTerm);
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);        
    }

    return(
      <div className="wrap">
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" className="searchTerm" placeholder="What are you looking for?" 
            value={searchTerm} onChange={handleChange} />
        </form>
      </div>
    )
}

export default SearchBar;