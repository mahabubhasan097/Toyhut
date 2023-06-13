import React from 'react';
import HomeSlider from './HomeSlider';
import PhotoGallery from './PhotoGallery';
import useTitle from '../../hooks/useTitle';
import ShopByCategory from './ShopByCategory';
import SaleAndNewsletter from './SaleAndNewsletter';

const Home = () => {
    useTitle('Home')
    return (
        <>
            <HomeSlider></HomeSlider>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
            <SaleAndNewsletter></SaleAndNewsletter>
        </>
    );
};

export default Home;