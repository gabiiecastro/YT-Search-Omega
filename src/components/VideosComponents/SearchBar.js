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
        <Paper elevation={6} style={{ padding: '25px '}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..."
                    value={searchTerm} 
                    onChange={handleChange}
                />                    
            </form>
        </Paper>
    )
}

export default SearchBar;