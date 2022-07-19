import React from 'react';

const Feeds = () => {
    const specTypes = [
        {
            'title': 'Elastos Decentralized Identifiers (DIDs)',
            'description': 'enable users to sign into and operate across applications with a single account from which they fully control the data they generate.'
        },
        {
            'title': 'Verifiable Credentials (VCs)',
            'description': 'produce social graphs using specified formats and data models that inform the cryptographic representation and verification of assertions.'
        },
        {
            'title': 'Decentralized Web Nodes (DWN)',
            'description': 'the Hive network and blockchain provide a decentralized mechanism to store generated data and support communications between users and applications.'
        }
    ]
    const [specTab, setSpecTab] = React.useState(0)
    return (
        <div className="container">
            <div className="face-container height-100vh"  style={{display: 'flex'}}>
                <div className="app-face-case">
                    <div className="app-face-box">
                        <div className="face-img" style={{ background: `url(/images/apps/Feeds.svg) left center / contain no-repeat` }}/>
                        <div className="title-box" style={{ top: '20%' }}>
                            <p>Apps</p>
                            <h1 className="title no-user-select">Feeds</h1>
                        </div>
                    </div>
                </div>
                <div className="phone-view-case">
                    <div className="phone-view-box">
                        <img className="no-user-select" src="images/apps/phone-Feeds.png"/>
                        <div className="hide-box"/>
                    </div>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50">
                <div className="col-sm-12 justify-content-center" style={{display: 'flex'}}>
                    <h1 className="text-white text-center">
                        Feeds is a decentralized social media platform where users remain in full control of the data they generate.
                    </h1>
                </div>
                <div className="col-sm-12 justify-content-center margin-t-50">
                    <p className="text-white text-center" style={{fontSize: '14pt'}}>
                        Feeds employs three key tech components to fully align its platform with web5 principles:
                    </p>
                </div>
                <div className="col-sm-12 padding-t-15">
                    <div className="row">
                        {
                            specTypes.map((item, _i)=>(
                                <div className="col-sm-4" style={{marginBottom: '20px'}} key={_i}>
                                    <div className="card card-custom">
                                        <div className="card-body text-white">
                                            <h4 className="text-center font-weight-bold card-title">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="face-container for-feeds">
                <div className="phone-view-case for-spec">
                    <div className="phone-view-box for-spec">
                        <img className='active' src={`images/apps/phone-Feeds-1.png`}/>
                        <div className="blur-back purple-box"/>
                        <div className="blur-back blue-box"/>
                    </div>
                </div>
                <div className='spec-container'>
                    <div className="row padding-x-20 margin-t-50">
                        <div className="col-sm-12 text-center">
                            <img className="Feeds-mark no-user-select" src='/images/apps/FeedsLogo.svg'/>
                        </div>
                        <div className="col-sm-12">
                            <h3 className="EE-title text-white text-center">Feeds. Web3 Social Network.</h3>
                        </div>
                        <div className="col-sm-12">
                            <div className="row app-download">
                                <div className="col-md-12 text-center" style={{marginBottom: 20}}>
                                    <div className="app-store apple">
                                        <button className="btn btn-apple">
                                            <img src='/images/apps/apple.svg'/>
                                            <img src='/images/apps/apple-text.svg'/>
                                        </button>
                                        <img src='/images/apps/apple-qr.svg'/>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="app-store gplay">
                                        <button className="btn btn-play">
                                            <img src='/images/apps/play.svg'/>
                                            <div>
                                                <span className='text-white'>GET IN ON</span>
                                                <h3 className='text-white'>Google Play</h3>
                                            </div>
                                        </button>
                                        <img src='/images/apps/play-qr.svg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds