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
                    <ol class="nav-menu">
                        <li class="menu-item">
                            <a href="#0">Services</a>
                            <ol class="sub-menu">
                                <li class="menu-item"><a href="#0">APIs</a></li>
                                <li class="menu-item"><a href="#0">Tools</a></li>
                            </ol>
                        </li>
                        <li class="menu-item">
                            <a href="#0">SDKs</a>
                            <ol class="sub-menu">
                                <li class="menu-item"><a href="#0">DID</a></li>
                                <li class="menu-item"><a href="#0">Hive</a></li>
                                <li class="menu-item"><a href="#0">Carrier</a></li>
                                <li class="menu-item"><a href="#0">Wallet</a></li>
                            </ol>
                        </li>
                        <li class="menu-item">
                            <a href="#0">Apps</a>
                            <ol class="sub-menu">
                                <li class="menu-item"><a href="#0">Essentials</a></li>
                                <li class="menu-item"><a href="#0">Feeds</a></li>
                                <li class="menu-item"><a href="#0">Pasar</a></li>
                            </ol>
                        </li>
                        <li class="menu-item">
                            <a href="#0">About</a>
                            <ol class="sub-menu">
                                <li class="menu-item"><a href="#0">Team</a></li>
                                <li class="menu-item"><a href="#0">Contact</a></li>
                            </ol>
                        </li>
                        <li class="menu-item"><a href="#0">English</a></li>
                    </ol>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;