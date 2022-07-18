import React from 'react';

const Essentials = () => {
    return (
        <div className="container">
            <div className="face-container height-100vh"  style={{display: 'flex'}}>
                <div className="app-face-case">
                    <div className="app-face-box">
                        <div className="face-img" style={{ background: `url(/images/apps/Essentials.svg) left center / contain no-repeat` }}/>
                        <div className="title-box">
                            <p>Apps</p>
                            <h1 className="title no-user-select">Essentials</h1>
                        </div>
                    </div>
                </div>
                <div className="phone-view-case">
                    <div className="phone-view-box">
                        <img src="images/apps/phone.png"/>
                        <div className="hide-box"/>
                    </div>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50">
                <div className="col-sm-12 justify-content-center" style={{display: 'flex'}}>
                    <h1 className="text-white text-center" style={{maxWidth: 800}}>
                        Next-generation non-custodial crypto wallet 
                        with built-in digital identities
                    </h1>
                </div>
                <div className="col-sm-12 justify-content-center padding-t-15" style={{display: 'flex', alignItems: 'center', gap: 20}}>
                    <span className="text-white text-center">Audited by</span>
                    <img className="no-user-select" src="/images/apps/slowmist.png" style={{width: 140}}/>
                </div>
            </div>
            <div className="face-container" style={{display: 'flex'}}>
                <div className="phone-view-case" style={{padding: '10vw 0', flex: 1, justifyContent: 'end'}}>
                    <div className="phone-view-box" style={{maxWidth: '70%'}}>
                        <img src="images/apps/phone-2.png"/>
                        <div className="blur-back purple-box"/>
                        <div className="blur-back blue-box"/>
                    </div>
                </div>
                <div className="spec-container">
                    <div className="spec-box">
                        {
                            Array(3).fill(0).map((_, index)=>(
                                <div className={`spec-tab ${index===0?'active':''}`}>
                                    <div className="spec-tab-content">
                                        <h3 className="text-white">Ownership</h3>
                                        <span class="text-white">
                                            Manage your<br/>
                                            personal Hive storage
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="row padding-x-20 margin-t-50">
                <div className="col-sm-12 text-center">
                    <img className="EE-mark no-user-select" src='/images/apps/ElastosEssentials.svg'/>
                </div>
                <div className="col-sm-12">
                    <h3 className="EE-title text-white text-center">Essentials. Your web3 app.</h3>
                </div>
                <div className="col-sm-12">
                    <div className="row app-download">
                        <div className="col-md-6 text-center">
                            <div className="app-store apple">
                                <img src='/images/apps/apple-qr.svg'/>
                                <button className="btn btn-apple">
                                    <img src='/images/apps/apple.svg'/>
                                    <img src='/images/apps/apple-text.svg'/>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
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
    )
}

export default Essentials