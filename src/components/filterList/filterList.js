import React from 'react';
import './filterList.scss';

const FilterList = (props) => {
    const { heading, filterData, selectedFilters, handleChange } = props;
    const isFilterSelected = (itemId) => {
        return selectedFilters.filter(f => f.id === itemId).length > 0;
    }
    return (
        <div className='filterList'>
            <label className='heading'>{heading}</label>
            <ul>
                {
                    filterData.length > 0 && filterData.map((fdata) => (
                        <li key={ fdata.id }>
                            <input type="checkbox" name="checkbox" id={ `chk_${ fdata.id }` } value={ fdata.id } checked={ isFilterSelected(fdata.id) } onChange={ (e) => handleChange(e, fdata, heading) } />
                            <label htmlFor={ `chk_${ fdata.id }` }>{fdata.name}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FilterList;