import {
  FILTER_BY_NAME,
  FILTER_BY_POPULATION,
  GET_ALL,
  IS_LOADING,
  SEARCH,
  SEARCH_BY_REGION,
} from './types';

const initialState = {
  countriesList: [],
  searchList: [],
  countriesByRegionList: [],
  isLoading: false,
  sortByPopLess: true,
  sortByNameLess: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        countriesList: action.countries,
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        sortByNameLess: !state.sortByNameLess,
        countriesList: state.countriesList.sort((a, b) => {
          if (state.sortByNameLess) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          } else {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }
        }),
      };

    case FILTER_BY_POPULATION:
      return {
        ...state,
        sortByPopLess: !state.sortByPopLess,
        countriesList: state.countriesList.sort((a, b) => {
          if (state.sortByPopLess) {
            return b.population - a.population;
          } else {
            return a.population - b.population;
          }
        }),
      };

    case SEARCH:
      return {
        ...state,
        searchList: action.countries,
      };

    case SEARCH_BY_REGION:
      return {
        ...state,
        countriesByRegionList: action.countries,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
