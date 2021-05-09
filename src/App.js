import React from 'react';
import './NavBar.css'
import Main from './components/Main'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import "jquery/dist/jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import { Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';


function App() {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <div className="container-fluid nav-cont mt-2">
            <nav className="navbar navBar navbar-static-top navbar-light navbar-expand-md display-inline">
                <div className="logo-box">
                  <NavLink to="/" exact>
                      <img className="d-inline-block img-fluid logo border" src={logo} alt="Logo"/>
                  </NavLink>
                </div>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink to="/" exact>
                        <div className="nav-panel my-1 mx-5 main-text-type">Students list</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/new">
                        <div className="nav-panel my-1 mx-5 main-text-type">Add new student</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
            </nav>
        </div>
      </header>
      <Main />
    </Router>
  );
}

export default App;
