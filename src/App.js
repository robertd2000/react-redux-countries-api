import { Route } from 'react-router';
import './App.css';

import { CountriesList } from './components/countriesList';
import { Header } from './components/Header';
import { Regions } from './components/Regions';
import { Search } from './components/Seach';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={CountriesList} />
      <Route path="/search" exact component={Search} />
      <Route path="/regions" exact component={Regions} />
    </div>
  );
}

export default App;
