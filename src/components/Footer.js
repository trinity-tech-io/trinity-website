import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation()
    const footerBgTypes = ['did', 'hive', 'carrier', 'wallet', 'essentials', 'feeds', 'pasar']
    let footerBgClass = ''
    for(let i=0; i<footerBgTypes.length; i++) {
        if(pathname.startsWith(`/${footerBgTypes[i]}`)){
            footerBgClass = `footer-bg-${footerBgTypes[i]}`
            break
        }
    }
    return (
        <footer className={`footer ${footerBgClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 margin-t-20">
                        <img src='images/logo.svg' style={{marginBottom: 30}}/>
                        <h4>Building the future with Elastos.</h4>
                        <div className="text-muted margin-t-20">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>Community</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="#">Cyber Republic</Link></li>
                                <li><Link to="#">Elastos.org</Link></li>
                                <li><Link to="#">Elastos-info</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>Resources</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="#">Mainchain</Link></li>
                                <li><Link to="#">Smart Chain</Link></li>
                                <li><Link to="#">ID Chain</Link></li>
                                <li><Link to="#">Dev Portal</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>Developers</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="#">Elastos Dev Portal</Link></li>
                                <li><Link to="#">E-lab</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>GitHub</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="#">Trinity Tech</Link></li>
                                <li><Link to="#">Elastos</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;