import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Essentials = () => {
  const specTypes = [
    {
      title: "Ownership",
      description: ["Manage your", "personal Hive storage"],
    },
    {
      title: "Identity",
      description: ["W3C-compliant", "DIDs (Digital Identities)"],
    },
    {
      title: "Scalable",
      description: ["More than 15 built-in", "networks and Ledger support"],
    },
  ];
  const [specTab, setSpecTab] = React.useState(0);
  return (
    <div className="container">
      <div className="face-container height-100vh" style={{ display: "flex" }}>
        <div className="app-face-case">
          <div className="app-face-box">
            <LazyLoadImage
              className="no-user-select"
              src="images/apps/Essentials.svg"
              effect="blur"
              wrapperClassName="img-wrapper"
              style={{
                maxHeight: 500,
                objectPosition: "left",
              }}
            />
            <div className="title-box">
              <p>Apps</p>
              <h1 className="title no-user-select">Essentials</h1>
            </div>
          </div>
        </div>
        <div className="phone-view-case">
          <div className="phone-view-box">
            <LazyLoadImage
              className="no-user-select"
              src="images/apps/phone-EE.png"
              effect="blur"
              wrapperClassName="img-wrapper"
            />
            <div className="hide-box" />
          </div>
        </div>
      </div>
      <div className="row padding-x-20 margin-t-50">
        <div
          className="col-sm-12 justify-content-center"
          style={{ display: "flex" }}
        >
          <h1 className="text-white text-center" style={{ maxWidth: 800 }}>
            Next-generation non-custodial crypto wallet with built-in digital
            identities
          </h1>
        </div>
        <div
          className="col-sm-12 justify-content-center padding-t-15"
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <span className="text-white text-center">Audited by</span>
          <img
            className="no-user-select"
            src="/images/apps/slowmist.png"
            alt=""
            style={{ width: 140 }}
          />
        </div>
      </div>
      <div className="face-container" style={{ display: "flex" }}>
        <div className="phone-view-case for-spec">
          <div className="phone-view-box for-spec">
            {specTypes.map((_, _i) => (
              <LazyLoadImage
                className="no-user-select"
                src={`images/apps/phone-${_i + 1}.png`}
                effect="blur"
                wrapperClassName={
                  _i === specTab ? "img-wrapper active" : "img-wrapper"
                }
                key={_i}
              />
              // <img className={_i===specTab?'active':''} src={`images/apps/phone-${_i+1}.png`} key={_i}/>
            ))}
            <div className="blur-back purple-box" />
            <div className="blur-back blue-box" />
          </div>
        </div>
        <div className="spec-container">
          <div className="spec-box">
            {specTypes.map((type, _i) => (
              <div
                className={`spec-tab ${_i === specTab ? "active" : ""}`}
                onClick={() => {
                  setSpecTab(_i);
                }}
                key={_i}
              >
                <div className="spec-tab-content">
                  <h3 className="text-white">{type.title}</h3>
                  <span className="text-white">
                    {type.description[0]}
                    <br />
                    {type.description[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row padding-x-20 margin-t-50">
        <div className="col-sm-12 text-center">
          <img
            className="EE-mark no-user-select"
            src="/images/apps/ElastosEssentials.svg"
            alt=""
          />
        </div>
        <div className="col-sm-12">
          <h3 className="EE-title text-white text-center">
            Essentials. Your web3 app.
          </h3>
        </div>
        <div className="col-sm-12">
          <div className="row app-download">
            <div className="col-md-6 text-center">
              <div className="app-store apple">
                <img src="/images/apps/apple-qr.svg" alt="" />
                <button className="btn btn-apple">
                  <img src="/images/apps/apple.svg" alt="" />
                  <img src="/images/apps/apple-text.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="app-store gplay">
                <button className="btn btn-play">
                  <img src="/images/apps/play.svg" alt="" />
                  <div>
                    <span className="text-white">GET IN ON</span>
                    <h3 className="text-white">Google Play</h3>
                  </div>
                </button>
                <img src="/images/apps/play-qr.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
