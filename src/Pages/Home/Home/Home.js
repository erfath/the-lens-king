import React from 'react';
import ExtraSection from '../../ExtraSection/ExtraSection';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;