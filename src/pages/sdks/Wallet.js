import React from 'react';
import SdkTemplate from './SdkTemplate';

const Wallet = () => {
    const props = {
        type: "Wallet", 
        aboutQ: "What is the Elastos Wallet SDK?", 
        aboutA: "Lorem ipsum dolor...",
        guideLink: "https://docs.elastos.org/guides/v/connectivity-sdk/"
    }
    return <SdkTemplate {...props}/>
}

export default Wallet