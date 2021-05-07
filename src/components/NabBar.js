import {Component} from 'react';
import logo from '../images/logo.png'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter as NavLink, Router} from 'react-router-dom';

class NavBar extends Component {

    state = {
        searchedDesc: "",
        searchedTag: "",
    }

    handleDescInputChange = (event) => {
        this.setState({
            searchedDesc: event.target.value,
        });
        //this.props.captureDescSearching(event.target.value)
    }

    handleTagInputChange = (event) => {
        this.setState({
            searchedTag: event.target.value,
        });
        //this.props.captureTagSearching(event.target.value)
    }

    render() {
        return (
            <div className="container-fluid mt-2">
                <nav className="navbar navBar navbar-light navbar-expand-md">
                    <div className="logo-box mr-1">
                        <NavLink to="/" exact>
                            <img className="d-inline-block img-fluid logo border" src={logo} alt="Logo"/>
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="main-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto" id="main-menu">
                            <li className="nav-item">
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/new">Add new student</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>

            // <div className="container-fluid mt-2">
            //     <nav className="navBar">
            //         <div className="col-2 logo-box">
            //             <img className="img-fluid logo border mx-5" src={logo} alt="Logo"/>
            //         </div>
            //         <div className="col-5 nav-elem">
            //             <div className="col-5">
            //                 <label htmlFor="descSearch" className="main-text-type">Search in description</label>
            //             </div>
            //             <div className="col-5">
            //                 <form className="form-check-inline">
            //                     <input className="form-control" type="search" placeholder="Description"
            //                            aria-label="Description" id="descSearch" onChange={this.handleDescInputChange}/>
            //                 </form>
            //             </div>
            //         </div>
            //         <div className="col-5 nav-elem">
            //             <div className="col-5">
            //                 <label htmlFor="tagSearch" className="main-text-type">Search for tag</label>
            //             </div>
            //             <div className="col-5">
            //                 <form className="form-check-inline">
            //                     <input className="form-control" type="search" placeholder="Tag"
            //                            aria-label="Tag" id="tagSearch" onChange={this.handleTagInputChange}/>
            //                 </form>
            //             </div>
            //         </div>
            //     </nav>
            // </div>
        );
    }
}

export default NavBar