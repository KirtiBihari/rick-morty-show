import React, { useState } from 'react';
import './searchBar.scss';

const SearchBar = (props) => {
    const { isMobile, handleSearch } = props;
    const [ searchText, setSearchText ] = useState('');
    const searchTextChange = (e) => {
        setSearchText(e.target.value);

        if(isMobile) {
            handleSearch(e.target.value)
        }
    }
    const searchBtnClick = () => {
        handleSearch(searchText)
    };
     
    return (
        <div className='searchBar'>
            <label className='heading'>Search by Name</label>
            <div className='searchTextBox'>
                <input type='text' className='searchText'  value={ searchText } onChange={ (event) => searchTextChange(event) }/>
                {!isMobile && <button onClick={ () => searchBtnClick() }>Search</button>}
            </div>
            
        </div>
    );
}

export default SearchBar;