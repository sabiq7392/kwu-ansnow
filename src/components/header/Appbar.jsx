import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  appBar: {
    background: '#97DFF4',
    composes: ['navbar', 'navbar-expand-lg', 'navbar-light', 'shadow-sm', 'sticky-top'],
  },
});

export default function Appbar() {
  const classes = useStyles();
  
  return (
    <nav className={classes.appBar}>
      <div className="container">
        <a className="navbar-brand" href="#home">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#our-service">Our Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#articles">Articles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#frequently-ask-questions">Frequently Ask Question</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
