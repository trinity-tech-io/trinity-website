import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from "react-i18next";

const MenuLink = (props) => (
    <Link {...props} onClick={(e)=>{e.target.blur()}}>{props.children}</Link>
)

const Navbar = () => {
    const languageTypes = [{value: 'en', name: 'English'}, {value: 'cn', name: '中文'}]
    const { i18n } = useTranslation();
    const [language, setLanguage] = React.useState("en");

    const handleLangChange = (e) => {
        const lang = e.target.getAttribute('value');
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };
    const currentLngId = Math.max(languageTypes.findIndex(item=>item.value==language), 0)

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
                        <li className="menu-item menu-dropdown">
                            <a data-toggle="submenu"><Trans>Services</Trans></a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="#0"><Trans>APIs</Trans></a></li>
                                <li className="menu-item"><a href="#0"><Trans>Tools</Trans></a></li>
                            </ol>
                        </li>
                        <li className="menu-item menu-dropdown">
                            <a data-toggle="submenu"><Trans>SDKs</Trans></a>
                            <ol className="sub-menu">
                                <li className="menu-item"><MenuLink to="/did"><Trans>DID</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/hive"><Trans>Hive</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/carrier"><Trans>Carrier</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/wallet"><Trans>Wallet</Trans></MenuLink></li>
                            </ol>
                        </li>
                        <li className="menu-item menu-dropdown">
                            <a data-toggle="submenu"><Trans>Apps</Trans></a>
                            <ol className="sub-menu">
                                <li className="menu-item"><MenuLink to="/essentials"><Trans>Essentials</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/feeds"><Trans>Feeds</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/pasar"><Trans>Pasar</Trans></MenuLink></li>
                            </ol>
                        </li>
                        <li className="menu-item menu-dropdown">
                            <a data-toggle="submenu"><Trans>About</Trans></a>
                            <ol className="sub-menu">
                                <li className="menu-item"><MenuLink to="/team"><Trans>Team</Trans></MenuLink></li>
                                <li className="menu-item"><MenuLink to="/contact"><Trans>Contact</Trans></MenuLink></li>
                            </ol>
                        </li>
                        <li className="menu-item menu-dropdown">
                            <a data-toggle="submenu">{languageTypes[currentLngId].name}</a>
                            <ol className="sub-menu">
                                {
                                    languageTypes.map((lng, _i)=>(
                                        <li className={lng.value===language ? 'active' : ''} key={_i}><a value={lng.value} onClick={handleLangChange}>{lng.name}</a></li>
                                    ))
                                }
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </nav>
  	);
}

export default Navbar;