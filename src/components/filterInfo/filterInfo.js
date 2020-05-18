import React from 'react';
import './filterInfo.scss';
import ChipItem from '../chipItem/chipItem';

const FilterInfo = (props) => {
    const { selectedFilters, handleClose } = props;

    return (
        selectedFilters.length > 0 ? <div className='filterInfo'>
            <label className='heading'>Selected Filters</label>
            <div className='chipList'>
                {  selectedFilters.map(item => (
                    <ChipItem item={ item } handleClose={ handleClose }/>
                ))
                }
            </div>
        </div> : null
    );
}

export default FilterInfo;