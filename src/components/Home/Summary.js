import React from "react";
import { Link } from "react-router-dom";

const sdkFeatureTypes = ["DID", "Hive", "Carrier", "Wallet"];
const appFeatureTypes = ["Essentials", "Feeds", "Pasar", "E-lab", "KYC-me"];
const colorByType = {
  DID: "#3FFF7B",
  Hive: "#FF8A00",
  Carrier: "#4AA5FF",
  Wallet: "#9000F4",
  Essentials: "#FFFFFF",
  Feeds: "#7624FE",
  Pasar: "#FF5082",
  "E-lab": "#FF71B8",
  "KYC-me": "#4AB4F0",
};
class Summary extends React.Component {
  render() {
    let title = "Elastos SDKs";
    let description =
      "Everything needed by developers who\nwant to give data ownership back to their users.";
    let featureTypes = sdkFeatureTypes;
    if (this.props.type === "app") {
      title = "Elastos-powered apps";
      description =
        "A wallet, a social platform, and an NFT marketplace\nthat know what ‘own your data’ means.";
      featureTypes = appFeatureTypes;
    }

    return (
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="home-section-title text-white">{title}</h1>
              <h4 className="home-section-description text-white pre-text">
                {description}
              </h4>
            </div>
          </div>
          <div className="tablet-grid">
            <div className="row">
              {featureTypes.map((type, _i) => {
                const tabletStyle = {
                  "--hover-color": colorByType[type],
                };
                const iconStyle = {
                  mask: `url(/images/features/${type}.svg) no-repeat center`,
                  WebkitMask: `url(/images/features/${type}.svg) no-repeat center`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                };
                return (
                  <div className="col-3 tablet-card" key={_i}>
                    <Link
                      className="feature-tablet"
                      to={type.toLowerCase()}
                      style={tabletStyle}
                    >
                      <div className="tablet-fill" />
                      <div className="tablet-hover-back" />
                      <div
                        className="tablet-body"
                        style={{
                          padding: this.props.type === "app" ? "23%" : "30%",
                        }}
                      >
                        <div className="tablet-icon-box">
                          <div className="tablet-icon" style={iconStyle} />
                        </div>
                        {/* <img src={`/images/features/${type}.svg`} style={{width: '100%'}}/> */}
                      </div>
                    </Link>
                    <h4 className="home-section-description text-white text-center">
                      {type}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Summary;
