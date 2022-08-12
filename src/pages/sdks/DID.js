import React from 'react';
import SdkTemplate from './SdkTemplate';

const DID = () => {
    const props = {
        type: "DID", 
        aboutQ: "What are Decentralized Identities (DIDs)?", 
        aboutA: "Verified decentralized digital identities or DIDs will be the user's passcode into the metaverse and Web3.",
        guideLink: "https://docs.elastos.org/guides/v/did-identities/"
    }
    return <SdkTemplate {...props}/>
}

export default DID