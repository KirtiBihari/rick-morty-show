import React, { useState, useEffect } from 'react';
import './dataListContainer.scss';
import InfoTile from '../../components/infoTile/infoTile';
import { connect } from 'react-redux';

const DataListContainer = (props) => {
    const tileDataList = props.isFilterApplied ? props.filteredDataList : props.dataList;

    return (
        <div className='dataListContainer'>
            { (tileDataList && tileDataList.length > 0) ?
                tileDataList.map(item => (
                    <InfoTile tileData={ item } key={ item.id } />
                )) : <label className='noItemMsg'>No Items</label>
            }

        </div>
    );
}

const mapStateToProps = state => ({
    dataList: state.dataList,
    filteredDataList: state.filteredDataList,
    isFilterApplied: state.isFilterApplied
});

export default connect(mapStateToProps, null)(DataListContainer);
