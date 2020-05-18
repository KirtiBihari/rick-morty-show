import React from 'react';
import './sortingOption.scss';
const sortOptions = [
    { id:1, displayName: 'Ascending', val: 'asc' },
    { id:2, displayName: 'Descending', val: 'desc' }
]

const SortingOption = (props) => {
    const { handleSort } = props;
    return (
        <div className='sortingOption'>
            <label className='heading'>Sort by ID</label>
            <select onChange={ (event) => handleSort(event) }>
                {sortOptions.map(item => (
                    <option value={ item.val } key={ item.id }>{item.displayName}</option> 
                ))
                }
            </select>
        </div>
    );
}

export default SortingOption;