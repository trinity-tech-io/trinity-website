import React from 'react';
import SdkTemplate from './SdkTemplate';

const Wallet = () => {
    const props = {
        type: "Wallet", 
        aboutQ: "What is the Elastos Wallet JS SDK?", 
        aboutA: "Manage transactions for Elastos blockchains from Javascript apps: cross chain transfers, DPoS voting, Cyber Republic voting",
        guideLink: "https://www.npmjs.com/package/@elastosfoundation/wallet-js-sdk"
    }
    return <SdkTemplate {...props}/>
}

export default Wallet