import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation()
    const footerBgTypes = ['did', 'hive', 'carrier', 'wallet', 'essentials', 'feeds', 'pasar', 'elab']
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
                                <li><a href="https://www.cyberrepublic.org/" target='_blank'>Cyber Republic</a></li>
                                <li><a href="https://www.elastos.org/" target='_blank'>Elastos Foundation</a></li>
                                <li><a href="https://www.elastos.info/" target='_blank'>Elastos Info</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>Resources</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="https://docs.elastos.org/guides/v/mainchain/" target='_blank'>Mainchain</a></li>
                                <li><a href="https://docs.elastos.org/guides/v/esc/" target='_blank'>Smartchain</a></li>
                                <li><a href="https://docs.elastos.org/guides/v/eid/" target='_blank'>Identity Chain</a></li>
                                <li><a href="https://elastos.info/academy/elastos-developers-guide/" target='_blank'>Elastos Academy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>Developers</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="https://docs.elastos.org/" target='_blank'>Elastos Dev Portal</a></li>
                                <li><a href="https://e-lab.io/" target='_blank'>E-lab</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 margin-t-20">
                        <h4>GitHub</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="https://github.com/elastos-trinity" target='_blank'>Trinity Tech</a></li>
                                <li><a href="https://github.com/elastos" target='_blank'>Elastos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;