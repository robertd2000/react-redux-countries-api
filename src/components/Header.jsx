import { Link } from 'react-router-dom';

const nav = [
  { title: 'Home', path: '/' },
  { title: 'Search', path: '/search' },
  { title: 'Regions', path: '/regions' },
];

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Countries API
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {nav.map((n) => (
            <NavItem data={n} key={n.title} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ data }) => {
  return (
    <Link to={data.path} className="nav-item nav-link active" href="#">
      {data.title}
    </Link>
  );
};
