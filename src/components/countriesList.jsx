import { useDispatch, useSelector } from 'react-redux';
import {
  filterByName,
  filterByPopulation,
  setCountriesThunk,
} from '../redux/actions';
import { useEffect } from 'react';
import { CountryItem } from './CountryItem';
import Loader from './Loader';

export const CountriesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountriesThunk());
  }, []);
  const countriesList = useSelector((state) => state.reducer.countriesList);
  const isLoading = useSelector((state) => state.reducer.isLoading);
  return (
    <div className="container ">
      <ul className="nav justify-content-end">
        <span className="nav-link">Filter by: </span>

        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => dispatch(filterByName())}
          >
            name
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => dispatch(filterByPopulation())}
          >
            population
          </a>
        </li>
      </ul>
      {isLoading ? <Loader /> : null}
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        {countriesList.map((c) => (
          <CountryItem data={c} key={c.numericCode + Math.random()} />
        ))}
      </div>
    </div>
  );
};
