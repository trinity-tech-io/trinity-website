import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="/">
                    <img src='images/logo.svg'/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center ml-auto" id="mySidenav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">SDKs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">English</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;