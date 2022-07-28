import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const KYCme = () => {
    return (
        <div className="container">
            <div className="face-container height-100vh"  style={{display: 'flex'}}>
                <div className="app-face-case">
                    <div className="app-face-box">
                        <LazyLoadImage 
                            className="no-user-select"
                            src='images/apps/KYC.svg'
                            effect="blur" 
                            wrapperClassName='img-wrapper'
                        />
                        <div className="title-box">
                            <p>Apps</p>
                            <h1 className="title no-user-select">KYC-me</h1>
                        </div>
                    </div>
                </div>
                <div className="phone-view-case">
                    <div className="phone-view-box">
                        <LazyLoadImage 
                            className="no-user-select"
                            src='images/apps/phone-KYC.png'
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
                        KYC service for W3C Verifiable credentials on Elastos.
                    </h1>
                </div>
                <div className="col-sm-12 justify-content-center margin-t-50">
                    <p className="text-white" style={{fontSize: '14pt'}}>
                       Verify your physical identity, generate private unalterable credentials that hold your personal information, download those credentials into identity wallets such as Essentials, to use in third-party dApps on the go.
                    </p>
                </div>
            </div>
            <div className="row padding-x-20 pasar-box" style={{margin: '150px 0'}}>
                <div className="col-sm-12 text-center">
                    <LazyLoadImage 
                        className="no-user-select"
                        src='images/apps/KYCLogo.svg'
                        effect="blur" 
                        wrapperClassName='img-wrapper pasar-logo'
                    />
                </div>
                <div className="col-sm-12 text-center pasar-title">
                    <h3 className="text-white text-center sdk-detail">
                        KYC-me. Your Decentralized Identity.
                    </h3>
                </div>
                <div className="col-sm-12 text-center">
                    <a className="btn btn-browse for-kyc" href="https://kyc-me.io" target="_blank">Browse KYC-me</a>
                </div>
            </div>
        </div>
    )
}

export default KYCme