import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seacrhByName, seacrhByRegionThunk } from '../redux/actions';
import { CountryItem } from './CountryItem';
import Loader from './Loader';

const regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Regions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seacrhByRegionThunk('region', 'Africa'));
  }, []);
  const countriesList = useSelector(
    (state) => state.reducer.countriesByRegionList
  );
  const isLoading = useSelector((state) => state.reducer.isLoading);

  const searchHandler = (region) => {
    dispatch(seacrhByRegionThunk('region', region));
  };
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        {isLoading ? <Loader /> : null}
        {regionList.map((r) => {
          return (
            <li key={r} className="nav-item">
              <a className="nav-link" href="#" onClick={() => searchHandler(r)}>
                {r}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        {countriesList.length > 0
          ? countriesList.map((c) => (
              <CountryItem data={c} key={c.numericCode + Math.random()} />
            ))
          : 'Not found:('}
      </div>
    </div>
  );
};
