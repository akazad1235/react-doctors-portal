import React from 'react';
import FeaturedService from '../../FeaturedService/FeaturedService';
import MakeAppoinment from '../../MakeAppoinment/MakeAppoinment';
import Services from '../../Services/Services';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;