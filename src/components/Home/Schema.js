import React from 'react';
import { Link } from 'react-router-dom';

class Schema extends React.Component {
  render() {
  	return (
        <section className="section section-lg" id="schema" style={{paddingBottom: 0}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="home-section-title text-white">
                            Building{' '}<span className="blue-graditext">next-generation</span><br/>
                            Web3 SDKs and Apps to<br/>
                            let you own your data<br/>
                            with{' '}<span className="pink-graditext">Elastos</span>.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="phone-img-container">
                <div className="phone-img-box">
                    <div className="back-light"/>
                    <div className="phone-img-wrapper">
                        <img src="images/phone1.png" alt=""/>
                        <img src="images/phone2.svg" alt=""/>
                    </div>
                    <div className="hide-box"/>
                </div>
            </div>
        </section>
  	);
  }
}
export default Schema;