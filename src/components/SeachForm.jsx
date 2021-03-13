import { useEffect } from 'react';
import { Field } from 'redux-form';

export const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Find by:</label>

        <Field
          className="custom-select"
          name="select"
          id="inputGroupSelect01"
          component="select"
        >
          <option></option>
          <option value="name">Name</option>
          <option value="capital">Capital city</option>
          <option value="region">Region</option>
        </Field>
        <Field
          className="form-control"
          placeholder="countryName"
          name="countryName"
          component="input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Seach
      </button>
    </form>
  );
};
