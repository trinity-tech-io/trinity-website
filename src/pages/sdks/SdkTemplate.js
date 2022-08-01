import React from 'react';
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const sdkTypes = ["DID", "Hive", "Carrier", "Wallet"]
const SdkTemplate = (props) => {
    const navigate = useNavigate()
    const { type='', aboutQ='', aboutA='', guideLink='' } = props
    const handleClickPrev = (e) => {
        const prevIndex = sdkTypes.indexOf(type)-1
        const prevType = sdkTypes[prevIndex]
        navigate("/"+prevType)
    }
    const handleClickNext = (e) => {
        const nextIndex = sdkTypes.indexOf(type)+1
        const nextType = sdkTypes[nextIndex]
        navigate("/"+nextType)
    }
    return (
        <div className="container">
            <div className="face-container width-100vw height-100vh">
                {
                    type!='DID' && 
                    <div className="switch-btn-box" style={{left: 0}}>
                        <button class='btn switch-page-btn' onClick={handleClickPrev}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            prev
                        </button>
                    </div>
                }
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
                {
                    type!='Wallet' && 
                    <div className="switch-btn-box" style={{right: 0}}>
                        <button class='btn switch-page-btn' onClick={handleClickNext}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            next
                        </button>
                    </div>
                }
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
                <a className="btn btn-start" href={guideLink} target="_blank">Get Started</a>
            </div>
        </div>
    );
}

export default SdkTemplate;