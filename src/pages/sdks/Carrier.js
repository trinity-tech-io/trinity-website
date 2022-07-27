import React from 'react';
import SdkTemplate from './SdkTemplate';

const Carrier = () => {
    const props = {
        type: "Carrier", 
        aboutQ: "What is the Elastos Carrier protocol?", 
        aboutA: "Peer-to-peer communications. Share any data without the need of centralized servers. Used by the Elastos Hive storage to access your data anywhere.",
        guideLink: "https://docs.elastos.org/guides/v/web3-communications-carrier/"
    }
    return <SdkTemplate {...props}/>
}

export default Carrier