import React from 'react';
import { Link } from 'react-router-dom';

 const SearchVideoButton = () => {    
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/search">Search Video</Link>
        </div>  
      </div>
    </div>
  );
};

export default SearchVideoButton;