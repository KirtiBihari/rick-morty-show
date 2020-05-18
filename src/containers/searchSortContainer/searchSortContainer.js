import React from 'react';
import './searchSortContainer.scss';
import { connect } from 'react-redux';
import { removeFilter, searchFilter, sortFilter } from '../../store/actions/actions';
import FilterInfo from '../../components/filterInfo/filterInfo';
import SearchBar from '../../components/searchBar/searchBar';
import SortingOption from '../../components/sortingOption/sortingOption';

const SearchSortContainer = (props) => {

    const handleClose = (item) => {
        props.removeFilter(item);
    }
    const handleSearch = (text) => {
        props.searchFilter({ searchText: text });
    }
    const handleSort = (e) => {
        props.sortFilter({ sortKey: e.target.value });
    }

    return (
        <div className='searchSortContainer'>
            <FilterInfo selectedFilters={ props.selectedFilters } handleClose={ handleClose }/>
            <div className='searchSortcontent'>
                <SearchBar isMobile={ props.isMobile } handleSearch={ handleSearch }/>
                <SortingOption handleSort={ handleSort } />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    selectedFilters: state.selectedFilters
});

const mapDispatchToProps= (dispatch) =>{
    return {
        removeFilter: (data) => { dispatch(removeFilter( data )) },
        searchFilter: (data) => { dispatch(searchFilter( data )) },
        sortFilter: (data) => { dispatch(sortFilter( data )) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSortContainer);
