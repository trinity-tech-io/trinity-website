import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = (props) => (
    <Link {...props} onClick={(e)=>{e.target.blur()}}>{props.children}</Link>
)

class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <Link className="navbar-brand logo text-uppercase" to="/">
                    <img src='images/logo.svg'/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ol className="nav-menu">
                        <li className="menu-item">
                            <a href="#0">Services</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0">APIs</a></li>
                                <li className="menu-item"><a href="#0">Tools</a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0">SDKs</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><MenuLink to="/did">DID</MenuLink></li>
                                <li className="menu-item"><MenuLink to="/hive">Hive</MenuLink></li>
                                <li className="menu-item"><a href="#0">Carrier</a></li>
                                <li className="menu-item"><a href="#0">Wallet</a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a href="#0">Apps</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0">Essentials</a></li>
                                <li className="menu-item"><a href="#0">Feeds</a></li>
                                <li className="menu-item"><a href="#0">Pasar</a></li>
                            </ol>
                        </li>
                        <li className="menu-item">
                            <a>About</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><MenuLink to="/team">Team</MenuLink></li>
                                <li className="menu-item"><MenuLink to="/contact">Contact</MenuLink></li>
                            </ol>
                        </li>
                        <li className="menu-item"><a href="#0">English</a></li>
                    </ol>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;