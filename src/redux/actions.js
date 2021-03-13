import { Service } from '../api/api';
import {
  FILTER_BY_NAME,
  FILTER_BY_POPULATION,
  GET_ALL,
  IS_LOADING,
  SEARCH,
  SEARCH_BY_REGION,
} from './types';

const setCountries = (countries) => ({
  type: GET_ALL,
  countries,
});

const search = (countries) => ({
  type: SEARCH,
  countries,
});

const seacrhByRegion = (countries) => ({
  type: SEARCH_BY_REGION,
  countries,
});

const setIsLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading,
});

export const filterByName = () => ({
  type: FILTER_BY_NAME,
});

export const filterByPopulation = () => ({
  type: FILTER_BY_POPULATION,
});

export const setCountriesThunk = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const data = await Service.getAllCountries();
    dispatch(setCountries(data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const seacrhByName = (filter, value) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const data = await Service.seacrhByName(filter, value);
    dispatch(search(data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const seacrhByRegionThunk = (filter, value) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const data = await Service.seacrhByName(filter, value);
    dispatch(seacrhByRegion(data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};
