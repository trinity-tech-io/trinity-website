import React from 'react';
import ConicGradiSection from '../components/ConicGradiSection';
import Schema from '../components/Home/Schema';
import Summary from '../components/Home/Summary';

const Home = () => {
    return (
        <>
            <ConicGradiSection title="We build (on) Elastos." titleAlign="center" scrollDown={true}/>
            <Schema />
            <Summary type='sdk' />
            <Summary type='app' />
        </>
    );
}

export default Home;