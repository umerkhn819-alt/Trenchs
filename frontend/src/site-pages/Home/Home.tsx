import React from 'react';
import LandingPage from '../Landing/LandingPage';
import HeroLanding from '../Landing/HeroLanding';

export const Home: React.FC = () => {
    return (
        <>
            <HeroLanding />
            <LandingPage />
        </>
    );
};
export default Home;
