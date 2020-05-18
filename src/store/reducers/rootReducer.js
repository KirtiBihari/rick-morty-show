import { RECEIVE_API_DATA, UPDATE_FILTER_DATA, REMOVE_FILTER, SEARCH_FILTER, SORT_FILTER } from '../actions/actions';
import { dynamicsort } from '../../shared/utility/utility';
// import dataList from '../../assets/data.json';

const filterList = {
    'Species': [
        { id: 1, name: 'Human' },
        { id: 2, name: 'Mytholog' },
        { id: 3, name: 'Other Species', nonList: [ 'Human', 'Mytholog' ] }
    ],
    'Gender': [
        { id: 4, name: 'Male' },
        { id: 5, name: 'Female' }
    ],
    'Origin': [
        { id: 6, name: 'Unknown' },
        { id: 7, name: 'Post-Apocalyptic Earth' },
        { id: 8, name: 'Nuptia 4' },
        { id: 9, name: 'Other Origins', nonList: [ 'Unknown', 'Post-Apocalyptic Earth', 'Nuptia 4' ] }
    ]
}

const initState = {
    dataList: [],
    dataInfo: {},
    filteredDataList: [],
    isFilterApplied: false,
    filters: filterList,
    selectedFilters: [],
    isSearchFilter: false,
    isSortFilter: false
}

const updateDataList = (state, action) => {
    return {
        ...state,
        dataList: [ ...state.dataList, ...action.data.results ],
        dataInfo: action.data.info
    }
}

const getFilteredData = (dataList, selectedFilters) => {
    let filteredData = [];
    const validateFilter = val => {
        let isValid = false;

        selectedFilters.some((item) => {
            if(item.filterKey === 'species') {
                isValid = item.nonList ?
                    item.nonList.indexOf(val[ item.filterKey ]) === -1 :
                    val[ item.filterKey ] === item.name;
            }
            else if(item.filterKey === 'origin') {
                isValid = item.nonList ?
                item.nonList.indexOf(val[ item.filterKey ].name) === -1 :
                val[ item.filterKey ].name === item.name;
            }
            else {
                isValid = val[ item.filterKey ] === item.name;
            }

            if(isValid) return isValid;
        });

        return isValid;
    }

    filteredData = dataList.filter(item => (validateFilter(item)));
    
    return filteredData;
}

const removeFilteritem = (state, filterItem) => {
    const selectedFilters = [ ...state.selectedFilters ];
    const existedItemIndex= selectedFilters.findIndex(item=> item.id === filterItem.id);
    selectedFilters.splice(existedItemIndex, 1);

    return selectedFilters;
}

const updateFilter = (state, action) => {
    let selectedFilters = [ ...state.selectedFilters ];
    const curItem = action.data.item;
    const hasFilter = selectedFilters.length > 0 ?
        selectedFilters.filter(item => (item.id === curItem.id)) : [];

    if(hasFilter.length > 0 && !action.data.isChecked) {
        selectedFilters = removeFilteritem(state, curItem);
    }
    else {
        selectedFilters.push(curItem);
    }

    return {
        ...state,
        selectedFilters,
        filteredDataList: getFilteredData([ ...state.dataList ], selectedFilters),
        isFilterApplied: selectedFilters.length > 0 ? true : false
    }
}

const removeFilter = (state, action) => {
    const selectedFilters = removeFilteritem(state, action.data);
    
    return {
        ...state,
        selectedFilters,
        filteredDataList: getFilteredData([ ...state.dataList ], selectedFilters),
        isFilterApplied: selectedFilters.length > 0 ? true : false
    }
}

const searchFilter = (state, action) => {
    const searchText = action.data.searchText;
    const dataList = state.isFilterApplied ? [ ...state.filteredDataList ] : [ ...state.dataList ];
    let searchFilterList = [];
    if (searchText.length > 0) {
        searchFilterList = dataList.filter(item => (item.name.toLowerCase().includes(searchText.toLowerCase())));
    }

    return {
        ...state,
        filteredDataList: searchText.length > 0 ? searchFilterList : dataList,
        isFilterApplied: state.selectedFilters.length > 0 || searchText.length > 0 ? true : false,
        isSearchFilter: searchText.length > 0 ? true : false
    }
}

const sortFilter = (state, action) => {
    const sortKey = action.data.sortKey;
    const dataList = state.isFilterApplied ? [ ...state.filteredDataList ] : [ ...state.dataList ];
    const searchFilterList = dataList.sort(dynamicsort(sortKey, 'id'));

    return {
        ...state,
        filteredDataList: searchFilterList,
        isFilterApplied: state.selectedFilters.length > 0 || sortKey.length > 0 ? true : false,
        isSortFilter: true
    }
}

const rootReducer= (state = initState, action)=>{
    switch (action.type) {
        case RECEIVE_API_DATA:
          return updateDataList(state, action);
        case UPDATE_FILTER_DATA:
          return updateFilter(state, action);
        case REMOVE_FILTER:
          return removeFilter(state, action);
        case SEARCH_FILTER:
          return searchFilter(state, action);
        case SORT_FILTER:
          return sortFilter(state, action);
        default:
          return state;
    }
}

export default rootReducer;