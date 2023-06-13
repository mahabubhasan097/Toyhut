import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../assets/toyhutLOGO.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-color-one pt-lg-5">
            <Container>
                <Row>
                    <Col md={3} className="mb-3 mb-lg-4 text-center">
                        <img src={logo} alt="" className='footerlogo'/>
                        <p className='text-secondary font-12'>
                            We are committed to providing the best selection of high-quality toys for children. Our mission is to inspire creativity, encourage learning, and bring joy to kids of all ages through play.
                        </p>
                    </Col>
                    <Col md={3} className="mb-3 mb-lg-4 pt-lg-4 text-center">
                        <h5 className='color-one fw-bold font-16'>Social Links</h5>
                        <div className='mb-3'>
                        <a href="#"><FaTwitterSquare className='fs-3 color-one footer-links'></FaTwitterSquare></a>
                        <a href="#"><FaFacebookSquare className='fs-3 mx-3 color-one footer-links'></FaFacebookSquare></a>
                        <a href="#"><FaInstagramSquare className='fs-3 color-one footer-links'></FaInstagramSquare></a>
                        </div>
                        <div>
                        <a href="#"><FaWhatsappSquare className='fs-3 color-one footer-links'></FaWhatsappSquare></a>
                        <a href="#"><FaGooglePlusSquare className='fs-3 mx-3 color-one footer-links'></FaGooglePlusSquare></a>
                        <a href="#"><FaLinkedin className='fs-3 color-one footer-links'></FaLinkedin></a>
                        </div>
                    </Col>
                    <Col md={3} className="mb-3 mb-lg-4 pt-lg-4 text-center">
                        <h5 className='color-one fw-bold font-16'>Help</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className='text-decoration-none text-secondary footer-links font-12'>Contact Us</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-secondary footer-links font-12'>Brands</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-secondary footer-links font-12'>Special Discount</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-secondary footer-links font-12'>Wish List</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3 mb-lg-4 pt-lg-4 text-center">
                        <h5 className='color-one fw-bold font-16'>Contact Us</h5>
                        <p className='text-secondary font-12'>
                            123 Toy Street, City<br />
                            State, Country<br />
                            Phone: (123) 456-7890<br />
                            Email: info@example.com
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center bg-secondary py-3 text-light">
                <p className="mb-0 font-12">&copy; {new Date().getFullYear()} <span className='color-one'>Toy Hut</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;

