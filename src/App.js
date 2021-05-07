import './NavBar.css'
import Main from './components/Main'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import './App.css';
import logo from './images/logo.png'
import "jquery/dist/jquery"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/js/bootstrap";

function App() {

  return (
    <Router>
      <header>
        <div className="container-fluid nav-cont mt-2">
            <nav className="navbar navBar navbar-static-top navbar-light navbar-expand-md display-inline">
                <div className="logo-box">
                    <NavLink to="/" exact>
                        <img className="d-inline-block img-fluid logo border" src={logo} alt="Logo"/>
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" 
                aria-controls="main-menu" aria-expanded="false" aria-controls="navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto mr-auto text-center" id="main-menu">
                        <li className="nav-item">
                          <NavLink to="/" exact>
                           <div className="nav-item nav-panel mx-5 main-text-type">Home</div>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/new">
                            <div className="nav-item nav-panel mx-5 main-text-type">Add new student</div>
                          </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      </header>
      <Main />
    </Router>
  );
}

export default App;
