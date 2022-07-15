import React from 'react';
import SdkTemplate from './SdkTemplate';

const Hive = () => {
    const props = {
        type: "Hive", 
        aboutQ: "What is the Elastos Hive storage?", 
        aboutA: [ 
            "Hive allows you to choose where you let applications store you data, should this be on a chosen commercial Hive service, or home on your own Elabox.",
            "Secured by Elastos DIDs authentication."
        ]
    }
    return <SdkTemplate {...props}/>
}

export default Hive