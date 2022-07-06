import React from 'react';
import { Link } from 'react-router-dom';

const sdkFeatureTypes = ['DID', 'Hive', 'Carrier', 'Wallet']
const appFeatureTypes = ['Essentials', 'Feeds', 'Pasar']
class Summary extends React.Component {
    render() {
        let title = 'Elastos SDKs'
        let description = 'Everything needed by developers who\nwant to give data ownership back to their users.'
        let featureTypes = sdkFeatureTypes
        if(this.props.type == 'app') {
            title = 'Elastos-powered apps'
            description = 'A wallet, a social platform, and an NFT marketplace\nthat know what ‘own your data’ means.'
            featureTypes = appFeatureTypes
        }

        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="home-section-title text-white">
                                {title}
                            </h1>
                            <h4 className="home-section-description text-white pre-text">
                                {description}
                            </h4>
                        </div>
                    </div>
                    <div style={{maxWidth: '700px', paddingTop: 60}}>
                        <div className="row">
                            {
                                featureTypes.map((type, _i)=>(
                                    <div className="col-3" style={{paddingRight: '6%'}}>
                                        <div className="feature-tablet">
                                            <div className="tablet-fill"/>
                                            <div className="tablet-body" style={{padding: this.props.type == 'app' ? '23%' : '30%'}}>
                                                <img src={`/images/features/${type}.svg`} style={{width: '100%'}}/>
                                            </div>
                                        </div>
                                        <h4 className="home-section-description text-white text-center">{type}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Summary;