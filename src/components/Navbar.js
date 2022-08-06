import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from "react-i18next";

const MenuLink = (props) => (
    <Link {...props} onClick={(e)=>{e.target.blur()}}>{props.children}</Link>
)

const MenuItems = [
    { 
        submenu: 'SDKs', 
        children: [
            {url: '/did', title: 'DID'},
            {url: '/hive', title: 'Hive'},
            {url: '/carrier', title: 'Carrier'},
            {url: '/wallet', title: 'Wallet'},
        ]
    },
    { 
        submenu: 'Apps', 
        children: [
            {url: '/essentials', title: 'Essentials'},
            {url: '/feeds', title: 'Feeds'},
            {url: '/pasar', title: 'Pasar'},
            {url: '/e-lab', title: 'E-lab'},
            {url: '/kyc-me', title: 'KYC-me'},
        ]
    },
    { 
        submenu: 'Services', 
        children: [
            {url: '#0', title: 'APIs'},
            {url: '#0', title: 'Tools'},
        ]
    },
    { 
        submenu: 'About', 
        children: [
            {url: '/team', title: 'Team'},
            {url: '/contact', title: 'Contact'},
        ]
    }
]
const languageTypes = [{value: 'en', name: 'English'}, {value: 'cn', name: '中文'}]

const Navbar = () => {
    const { i18n } = useTranslation();
    const { pathname } = useLocation();
    const [language, setLanguage] = React.useState("en");

    const handleLangChange = (e) => {
        const lang = e.target.getAttribute('value');
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };
    const currentLngId = Math.max(languageTypes.findIndex(item=>item.value==language), 0)
    const handleLinkItem = (e)=>{
        if(window.innerWidth <= 992)
            document.getElementById('collapse-btn').click()
    }
  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <Link className="navbar-brand logo text-uppercase" to="/">
                    <img src='images/logo.svg'/>
                </Link>
                <button className="navbar-toggler" type="button" id="collapse-btn" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ol className="nav-menu">
                        {
                            MenuItems.map((group, _i)=>(
                                <li className="menu-item menu-dropdown" key={_i}>
                                    <a data-toggle="submenu"><Trans>{group.submenu}</Trans></a>
                                    <ol className="sub-menu">
                                        {
                                            group.children.map((item, _j)=>{
                                                const activeClass = pathname==item.url ? "active": ""
                                                return <li className={`menu-item ${activeClass}`} key={_j} onClick={handleLinkItem}>
                                                    <MenuLink to={item.url}>
                                                        <Trans>{item.title}</Trans>
                                                    </MenuLink>
                                                </li>
                                            })
                                        }
                                    </ol>
                                </li>
                            ))
                        }
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