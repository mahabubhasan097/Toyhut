import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { FcDownLeft, FcDownRight } from 'react-icons/fc';
import { FaMailBulk } from "react-icons/fa";
const SaleAndNewsletter = () => {
    return (
        <div>
            <Container className='my-lg-5'>
                <div className='text-center mb-4 mb-lg-5'>
                    <h1 className='color-one font-20'>Our Sale Is Going On</h1>
                    <p className='font-13'><FcDownRight className='mb-1'></FcDownRight>Checkout Out Awesome Sale Offers<FcDownLeft className='mb-1'></FcDownLeft></p>
                </div>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className='d-flex p-1 p-lg-3 shadow rounded-3 bg-color-two'>
                            <div className='w-50'>
                                <img className='w-100 h-200 rounded-3' src="https://i.ibb.co/pJc9LJ9/mclaren-g3a0c277f9-640.jpg" alt="" />
                            </div>
                            <div className='w-50 text-center d-flex justify-content-center align-items-center'>
                                <div>
                                    <h4 className='fw-bold text-white bg-warning rounded-pill py-1 py-lg-2 font-13'>On Sale</h4>
                                    <p className='fw-bold font-13'>SAVE UPTO 30% OFF</p>
                                    <button className='border-0 text-white p-1 px-lg-3 py-lg-2 shop-btn rounded-3 shadow font-13'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col>
                        <div className='d-flex p-1 p-lg-3 shadow rounded-3 bg-color-three'>
                            <div className='w-50'>
                                <img className='w-100 h-200 rounded-3' src="https://i.ibb.co/FgZqr8n/pexels-pixabay-35619.jpg" alt="" />
                            </div>
                            <div className='w-50 text-center d-flex justify-content-center align-items-center'>
                                <div>
                                    <h4 className='fw-bold text-white bg-danger rounded-pill py-1 py-lg-2 font-13'>New Toys</h4>
                                    <p className='fw-bold font-13'>LATEST COLLECTION</p>
                                    <button className='border-0 text-white p-1 px-lg-3 py-lg-2 shop-btn rounded-3 shadow font-13'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='newsletter text-center py-3 py-lg-5 mt-4 mt-lg-0'>
                <FaMailBulk className='fs-1 color-one'></FaMailBulk>
                <h1 className='fw-bold font-20'>Join Our Mailing Lists <span className='color-one'>....</span> </h1>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" className='rounded-pill py-lg-3 font-12' placeholder="Enter email" />
                    </Form.Group>
                    <button className='search-btn text-white px-4 py-2 rounded-3 border-0 shadow font-12' type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    );
};


export default SaleAndNewsletter;

