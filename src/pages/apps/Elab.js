import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Elab = () => {
    return (
        <div className="container">
            <div className="face-container height-100vh"  style={{display: 'flex'}}>
                <div className="app-face-case">
                    <div className="app-face-box">
                        <LazyLoadImage 
                            className="no-user-select"
                            src='images/apps/Elab.svg'
                            effect="blur" 
                            wrapperClassName='img-wrapper'
                        />
                        <div className="title-box">
                            <p>Apps</p>
                            <h1 className="title no-user-select">E-lab</h1>
                        </div>
                    </div>
                </div>
                <div className="phone-view-case">
                    <div className="phone-view-box">
                        <LazyLoadImage 
                            className="no-user-select"
                            src='images/apps/phone-Elab.png'
                            effect="blur" 
                            wrapperClassName='img-wrapper'
                        />
                        <div className="hide-box"/>
                    </div>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50">
                <div className="col-sm-12 justify-content-center" style={{display: 'flex'}}>
                    <h1 className="text-white">
                        An Elastos community-driven grant program based on the passed Cyber Republic proposal.<br/>E-lab kickstarts Web3 projects.
                    </h1>
                </div>
                <div className="col-sm-12 justify-content-center margin-t-50">
                    <p className="text-white" style={{fontSize: '14pt'}}>
                       The main goal of E-lab is to fast-track project development of dApps utilizing Elastos infrastructure through community grant instead of requesting funds fromthe Cyber Republic DAO.
                    </p>
                </div>
            </div>
            <div className="row padding-x-20 pasar-box" style={{margin: '150px 0'}}>
                <div className="elab-particle-box">
                    <div className="elab-particle size-2"/>
                    <div className="elab-particle size-3"/>
                </div>
                <div className="col-sm-12 text-center">
                    <LazyLoadImage 
                        className="no-user-select"
                        src='images/apps/ElabLogo.svg'
                        effect="blur" 
                        wrapperClassName='img-wrapper pasar-logo'
                    />
                </div>
                <div className="col-sm-12 text-center pasar-title">
                    <h3 className="text-white text-center sdk-detail">
                        Elab. Decentralized Community Kickstarter.
                    </h3>
                </div>
                <div className="col-sm-12 text-center">
                    <a className="btn btn-browse-elab" href="https://pasarprotocol.io" target="_blank">Browse Elab</a>
                </div>
                <div className="elab-particle-box" style={{height: 150}}>
                    <div className="elab-particle size-1"/>
                    <div className="elab-particle size-4"/>
                </div>
            </div>
        </div>
    )
}

export default Elab