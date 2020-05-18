export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const UPDATE_FILTER_DATA = 'UPDATE_FILTER_DATA';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const SORT_FILTER = 'SORT_FILTER';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
export const updateFilterData = data => ({ type: UPDATE_FILTER_DATA, data });
export const removeFilter = data => ({ type: REMOVE_FILTER, data });
export const searchFilter = data => ({ type: SEARCH_FILTER, data });
export const sortFilter = data => ({ type: SORT_FILTER, data })