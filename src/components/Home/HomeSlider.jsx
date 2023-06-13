import React from 'react';
import { Carousel } from 'react-bootstrap';
import sl1 from '../../assets/sl1.jpg'
import sl2 from '../../assets/sl2.jpg'
import { FcAutomotive } from "react-icons/fc";


const HomeSlider = () => {
    return (
        <>
            <Carousel indicators={false}>
                <Carousel.Item className='slider-container h-250'>
                    <img
                        className="d-block w-100 img-fluid slider-img h-250"
                        src={sl1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slider-caption rounded-3 py-lg-5 px-3' data-aos="zoom-in">
                        <h3 className='font-13'> <FcAutomotive className='mb-1'></FcAutomotive> Discover a World of Fun and Imagination <FcAutomotive className='mb-1'></FcAutomotive></h3>
                        <p className='border-start border-end border-danger rounded-3 font-12'>Explore our wide range of toys that spark creativity, inspire imagination, and bring endless hours of fun to children of all ages. From educational toys to interactive playsets, we have everything your child needs to embark on exciting adventures and create unforgettable memories.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider-container h-250'>
                    <img
                        className="d-block w-100 img-fluid slider-img h-250"
                        src={sl2}
                        alt="Second slide"
                    />


                    <Carousel.Caption className='slider-caption rounded-3 py-lg-5 px-3'>
                        <h3 className='font-13'><FcAutomotive className='mb-1'></FcAutomotive> Unleash Joy and Adventure with Our Toy Collection <FcAutomotive className='mb-1'></FcAutomotive></h3>
                        <p className='border-start border-end border-danger rounded-3 font-12'>Experience the thrill of playtime with our incredible selection of toys. Whether it's action figures, dolls, puzzles, or board games, our toys are designed to entertain, engage, and encourage learning. Let your child's imagination soar and watch as they embark on thrilling journeys.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};


export default HomeSlider;

