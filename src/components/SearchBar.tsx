import React from 'react';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search Product" }) => {
  return (
    <div className='mb-5'>
      <h5 className='fw-bold'>Search.</h5>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <span className="input-group-text">
          <i className="bi bi-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;