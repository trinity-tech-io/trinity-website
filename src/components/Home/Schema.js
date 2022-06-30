import React from 'react';
import { Link } from 'react-router-dom';

class Schema extends React.Component {
  render() {
  	return (
        <section className="section section-lg bg-web-desc" id="schema">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="home-section-title text-white">
                            Building{' '}<span class="blue-graditext">next-generation</span><br/>
                            Web3 SDKs and Apps to<br/>
                            let you own your data<br/>
                            with{' '}<span class="pink-graditext">Elastos</span>.
                        </h1>
                    </div>
                </div>
            </div>
            <div class="phone-img-container">
                <div class="phone-img-box">
                    <div class="back-light"/>
                    <div class="phone-img-wrapper">
                        <img src="images/phone1.png" alt=""/>
                        <img src="images/phone2.svg" alt=""/>
                    </div>
                    <div class="hide-box"/>
                </div>
            </div>
        </section>
  	);
  }
}
export default Schema;