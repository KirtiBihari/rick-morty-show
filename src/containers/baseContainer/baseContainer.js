import React, { useState, useEffect } from 'react';
import './baseContainer.scss';
import DataListContainer from '../dataListContainer/dataListContainer';
import FilterContainer from '../filterContainer/filterContainer';
import SearchSortContainer from '../searchSortContainer/searchSortContainer';

const BaseContainer = (props) => {
    const [ isMobile, setIsMobile ] = useState(false);
    const handleWindowSizeChange = () => {
        const width = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;

        setIsMobile(width < 768);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        handleWindowSizeChange();

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[]);

    return (
        <div className='baseContainer'>
            <FilterContainer isMobile={ isMobile }/>
            <div className="dataContent">
                <SearchSortContainer isMobile={ isMobile } />
                <DataListContainer />
            </div>
            
        </div>
    );
}

export default BaseContainer;