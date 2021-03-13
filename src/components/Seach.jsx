import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { seacrhByName } from '../redux/actions';
import { CountryItem } from './CountryItem';
import Loader from './Loader';
import { SearchForm } from './SeachForm';

const SearchFormReducer = reduxForm({
  form: 'seachForm',
})(SearchForm);

export const Search = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.reducer.searchList);
  const isLoading = useSelector((state) => state.reducer.isLoading);

  const search = (data) => {
    const { countryName, select } = data;
    console.log(data);
    dispatch(seacrhByName(select, countryName));
  };
  return (
    <div className="container">
      <SearchFormReducer onSubmit={search} />
      {isLoading ? <Loader /> : null}
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
