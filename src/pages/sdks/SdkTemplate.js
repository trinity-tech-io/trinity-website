import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SdkTemplate = (props) => {
    const { type='', aboutQ='', aboutA='' } = props

    return (
        <div className="container">
            <div className="face-container width-100vw height-100vh">
                <div className="face-case">
                    <div className="face-box">
                        <LazyLoadImage 
                            className="face-img"
                            src={`images/sdks/${type}-1.svg`}
                            effect="blur" 
                            wrapperClassName='img-wrapper'
                        />
                        <div className="title-box">
                            <p>SDK</p>
                            <h1 className="title no-user-select">{type}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center padding-x-20" style={{marginBottom: 400}}>
                <div className="col-sm-12">
                    <h1 className="text-white text-center" style={{paddingBottom: 20}}>
                        {aboutQ}
                    </h1>
                </div>
                <h3 className="text-white text-center sdk-description">
                    {
                        Array.isArray(aboutA)?
                        aboutA.map((item, _i)=>(
                            <div key={_i}>
                                { item }
                                { (_i<aboutA.length-1) && <><br/><br/></> }
                            </div>
                        )):
                        aboutA
                    }
                </h3>
            </div>
            <div className="row justify-content-center padding-x-20" style={{marginBottom: 250}}>
                <div className="col-sm-12 text-center padding-b-50">
                    <LazyLoadImage 
                        className="no-user-select"
                        src={`/images/sdks/${type}-2.svg`}
                        effect="blur" 
                        wrapperClassName='img-wrapper'
                    />
                    {/* <img className="no-user-select" src={`/images/sdks/${type}-2.svg`}/> */}
                </div>
                <div className="col-sm-12">
                    <h1 className="text-white text-center" style={{paddingBottom: 15}}>
                        Start building with {type=='DID'?`${type}s`:type}
                    </h1>
                </div>
                <div className="col-sm-12 text-center" style={{paddingBottom: 40}}>
                    <h3 className="text-white text-center sdk-description sdk-detail">
                        Available for Typescript, Java, Swift and C.
                    </h3>
                </div>
                <button className="btn btn-start">Get Started</button>
            </div>
        </div>
    );
}

export default SdkTemplate;