import React from 'react';

const Pasar = () => {
    return (
        <div className="container">
            <div className="face-container height-100vh"  style={{display: 'flex'}}>
                <div className="app-face-case">
                    <div className="app-face-box">
                        <div className="face-img" style={{ background: `url(/images/apps/Pasar.svg) left center / contain no-repeat` }}/>
                        <div className="title-box">
                            <p>Apps</p>
                            <h1 className="title no-user-select">Pasar</h1>
                        </div>
                    </div>
                </div>
                <div className="phone-view-case">
                    <div className="phone-view-box">
                        <img className="no-user-select" src="images/apps/phone-Pasar.png"/>
                        <div className="hide-box"/>
                    </div>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50">
                <div className="col-sm-12 justify-content-center" style={{display: 'flex'}}>
                    <h1 className="text-white">
                        One of the world's first open source, community-driven, and truly decentralized Web3.0 marketplaces (DeMKT) for data- and Non-Fungible Token (NFT) exchange on the Elastos Smart Chain (ESC).
                    </h1>
                </div>
                <div className="col-sm-12 justify-content-center margin-t-50">
                    <p className="text-white" style={{fontSize: '14pt'}}>
                       By implementing badges that confirm verifiable credentials, Pasar also aims to integrate an industry-leading reputation system into its marketplace to support users in assessing the value of key trading data.
                    </p>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50 padding-b-50">
                <div className="col-sm-4">
                    <div className="nft-section left-box">
                        <img className="no-user-select" src='/images/nfts/nft-01.png'/>
                        <img className="no-user-select" src='/images/nfts/nft-02.png'/>
                        <div className="hide-box"/>
                    </div>
                </div>
                <div className="col-sm-4 pasar-box">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 text-center">
                            <img className="no-user-select pasar-logo" src='/images/apps/PasarLogo.svg'/>
                        </div>
                        <div className="col-sm-12 text-center pasar-title" style={{}}>
                            <h3 className="text-white text-center sdk-detail">
                                Pasar. Decentralized NFT Marketplace.
                            </h3>
                        </div>
                        <button className="btn btn-browse">Browse Pasar</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="nft-section right-box">
                        <img className="no-user-select" src='/images/nfts/nft-03.png'/>
                        <img className="no-user-select" src='/images/nfts/nft-04.png'/>
                        <div className="hide-box"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pasar