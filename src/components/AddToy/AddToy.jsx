import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext); // Assuming the user information is provided by the AuthContext
    useTitle('Add Toy')
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const picture = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { picture, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description }

        fetch('https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })
    }

    return (
        <Container>
            <Form onSubmit={handleAddToy} className="my-5 bg-color-one p-lg-4 rounded-3 shadow">
                <p className='color-one text-center m-0'>-o-o-o-o-o-o-o-o-o-o-o-</p>
                <h2 className="text-center fw-bold color-one my-1">Add a Toy</h2>
                <p className='color-one text-center mb-4'>-o-o-o-o-o-o-o-o-o-o-o-</p>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Picture URL</Form.Label>
                            <Form.Control className='mb-4' type="text" name="pictureUrl" placeholder="Enter picture URL" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Name</Form.Label>
                            <Form.Control className='mb-4' type="text" name="name" placeholder="Enter toy name" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Seller Name</Form.Label>
                            <Form.Control className='mb-4' type="text" name="sellerName" placeholder="Enter seller name" value={user.displayName} required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Seller Email</Form.Label>
                            <Form.Control className='mb-4' type="email" name="sellerEmail" placeholder="Enter seller email" value={user.email} required />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Sub-category</Form.Label>
                            <Form.Control className='mb-4' as="select" name="subCategory" required >
                                <option value="">Select sub-category</option>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Regular Car">Regular Car</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Price</Form.Label>
                            <Form.Control className='mb-4' type="number" step='any' name="price" placeholder="Enter price" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Rating</Form.Label>
                            <Form.Control className='mb-4' type="number" step='any' name="rating" placeholder="Enter rating" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='color-one fw-bold'>Available Quantity</Form.Label>
                            <Form.Control className='mb-4' type="number" name="quantity" placeholder="Enter available quantity" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Label className='color-one fw-bold'>Detail Description</Form.Label>
                    <Form.Control className='mb-4' as="textarea" name="description" placeholder="Enter detail description" rows={3} required />
                </Form.Group>

                <button type="submit" className='addtoy-btn text-white border-0 rounded-3 px-5 py-2 d-block mx-auto'> Add Toy </button>
            </Form>
        </Container>
    );
};

export default AddToy;
