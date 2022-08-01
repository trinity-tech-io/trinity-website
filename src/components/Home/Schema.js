import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Schema extends React.Component {
  render() {
    return (
      <section
        className="section section-lg"
        id="schema"
        style={{ paddingBottom: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="home-section-title text-white">
                Building <span className="blue-graditext">next-generation</span>
                <br />
                Web3 SDKs and Apps to
                <br />
                let you own your data
                <br />
                with <span className="pink-graditext">Elastos</span>.
              </h1>
            </div>
          </div>
        </div>
        <div className="phone-img-container">
          <div className="phone-img-box">
            <div className="back-light" />
            <div className="phone-img-wrapper">
              <LazyLoadImage
                className="no-user-select"
                src="images/phone1.png"
                effect="blur"
                wrapperClassName="img-wrapper"
              />
              <LazyLoadImage
                className="no-user-select"
                src="images/phone2.svg"
                effect="blur"
                wrapperClassName="img-wrapper"
              />
              {/* <img src="images/phone2.svg" alt=""/> */}
            </div>
            <div className="hide-box" />
          </div>
        </div>
      </section>
    );
  }
}
export default Schema;
