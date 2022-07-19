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
                                <div className="col-sm-4" style={{marginBottom: '20px'}}>
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
            
        </div>
    )
}

export default Feeds