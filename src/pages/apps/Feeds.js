import React from 'react';

const Feeds = () => {
    const specTypes = [
        {
            'title': 'Ownership',
            'description': ['Manage your', 'personal Hive storage']
        },
        {
            'title': 'Identity',
            'description': ['W3C-compliant', 'DIDs (Digital Identities)']
        },
        {
            'title': 'Scalable',
            'description': ['More than 15 built-in', 'networks and Ledger support']
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
            </div>
            
        </div>
    )
}

export default Feeds