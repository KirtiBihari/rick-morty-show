import React, { useState, useEffect } from 'react';
import './filterContainer.scss';
import { updateFilterData } from '../../store/actions/actions';
import FilterList from '../../components/filterList/filterList';
import { connect } from 'react-redux';

const FilterContainer = (props) => {
    const { isMobile } = props;
    const [ showFilter, setShowFilter ] = useState(true);
    useEffect(()=> {
        setShowFilter(isMobile ? false : true);
    }, [])
    const filterKeys = Object.keys(props.filters).length > 0 ? Object.keys(props.filters) : [];
    const handleChange = (e, curItem, filterKey) => {
        const currentItem = { ...curItem, filterKey: filterKey.toLowerCase() };
        props.updateFilterData({ item: currentItem, checked:e.target.checked })
    }
    const handleShowFilter = (e) => {
        e.preventDefault();
        setShowFilter(!showFilter);
    }

    const filterList = (<div className="filters">
        { filterKeys.length > 0 && filterKeys.map((fkey) => (
            <FilterList key={ fkey } filterData={ props.filters[ fkey ] } selectedFilters={ props.selectedFilters } heading={ fkey } handleChange={ handleChange }/>
        ))
        }
    </div>);

    return (
        <div className='filterContainer'>
            <label className='filterHeader'>
                <span className='headingText'>Filters</span>
                { isMobile &&
                    <button className="btn" onClick={ (event) => handleShowFilter(event) }>
                        { !showFilter && <i className="fa fa-plus-circle" aria-hidden="true"></i> }
                        { showFilter && <i className="fa fa-minus-circle" aria-hidden="true"></i> }
                    </button> }
            </label>
            { showFilter ? filterList : null }
        </div>
    );
}

const mapStateToProps = state => ({
    filters: state.filters,
    selectedFilters: state.selectedFilters
});

const mapDispatchToProps= (dispatch) =>{
    return {
        updateFilterData: (data) => { dispatch(updateFilterData( data )) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
