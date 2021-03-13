import { useState } from 'react';
import preposter from '../assets/preposter.png';

export const CountryItem = ({ data }) => {
  const [isImg, setIsImg] = useState(false);
  let imgLoad = () => {
    setIsImg(true);
  };
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    languages,
    timezones,
  } = data;
  return (
    <div className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="card " style={{ width: 500 }}>
        <img
          onLoad={imgLoad}
          className="card-img-top"
          src={isImg ? flag : preposter}
          alt={name}
        />
        <div className="card-body">
          <h3 className="card-body">{name}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Native name: <span className="font-weight-bold">{nativeName}</span>
          </li>
          <li className="list-group-item">
            Capital: <span className="font-weight-bold">{capital}</span>
          </li>
          <li className="list-group-item">
            Population: <span className="font-weight-bold">{population}</span>
          </li>
          <li className="list-group-item">
            Region: <span className="font-weight-bold">{region}</span>
          </li>
          <li className="list-group-item">
            Timezones:{' '}
            {timezones.map((t) => (
              <div key={Math.random()}>{t}</div>
            ))}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold">Languages:</span>
            <ul className="list-group list-group-flush">
              {' '}
              {languages.map((l) => (
                <li className="list-group-item" key={Math.random()}>
                  {l.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
