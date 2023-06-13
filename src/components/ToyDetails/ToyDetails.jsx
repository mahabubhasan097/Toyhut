import React, { useEffect, useState } from 'react';
import { Spinner, Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BsCarFront } from "react-icons/bs";
import useTitle from '../../hooks/useTitle';
const ToyDetails = () => {
    useTitle('Toy Details')
    const { id } = useParams();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        fetchToyDetails();
    }, [id]);

    const fetchToyDetails = async () => {
        const response = await fetch(`https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars/${id}`);
        const data = await response.json();
        setToy(data);
    };

    if (!toy) {
        return (
            <div className='d-flex justify-content-center h-500 align-items-center'>
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }

    return (
        <Container className='my-10 bg-color-one p-4 rounded-3 shadow position-relative'>
            <div className="floating position-absolute"> </div>
            <div className="floating2 position-absolute"> </div>
            <Row className=''>
                <Col md={6}>
                    <Image className='border-one rounded-3' src={toy.picture} alt={toy.name} fluid />
                </Col>
                <Col md={6}>
                    <h2 className='fw-bold color-one'> <BsCarFront className='text-white'></BsCarFront> {toy.name}</h2>
                    <p className='fw-bold'><span className='color-one border-start ps-1 border-warning'>Seller:</span> {toy.sellerName}</p>
                    <p className='fw-bold'><span className='color-one border-start ps-1 border-warning'>Seller Email:</span> {toy.sellerEmail}</p>
                    <p className='fw-bold'> <span className='color-one border-start ps-1 border-warning'>Price:</span> {toy.price}</p>
                    <p className='fw-bold'><span className='color-one border-start ps-1 border-warning'>Rating:</span> {toy.rating}</p>
                    <p className='fw-bold'><span className='color-one border-start ps-1 border-warning'>Available Quantity:</span> {toy.quantity}</p>
                    <p className='fw-bold'><span className='color-one border-start ps-1 border-warning'>Description:</span> {toy.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ToyDetails;