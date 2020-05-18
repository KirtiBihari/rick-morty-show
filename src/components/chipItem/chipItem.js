import React from 'react';
import './chipItem.scss';

const ChipItem = (props) => {
    const { item, handleClose } = props;

    return (
        <div className='chipItem'>
            <label>{item.name}</label>
            <i className="fa fa-times" aria-hidden="true" onClick={ () => handleClose(item) }></i>
        </div>
    );
}

export default ChipItem;