import React from 'react';
import { Link } from 'react-router-dom';

const featureTypes = ['DID', 'Hive', 'Carrier', 'Wallet']
class Summary extends React.Component {
  render() {
  	return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="home-section-title text-white">
                            Elastos SDKs
                        </h1>
                        <h4 className="text-white">
                            Everything needed by developers who<br/>want to give data ownership back to their users.
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
                                        <div className="tablet-body">
                                            <img src={`/images/features/${type}.svg`} />
                                        </div>
                                    </div>
                                    <h4 className="text-white text-center">{type}</h4>
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