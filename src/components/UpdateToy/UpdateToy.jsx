import React, { useEffect, useState } from 'react';
import { Container, Form, Spinner } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    useTitle('Update Toy')
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

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedCoffee = { price, quantity, description }

        console.log(updatedCoffee);

        // send data to the server
        fetch(`https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.href = `/mytoys`;
                        }
                      });
                }
            })
    }
    return (
        <Container>
            <Form className="my-5 bg-color-one p-lg-4 w-50 mx-auto rounded-3 shadow" onSubmit={handleUpdateToy}>
                <p className='color-one text-center m-0'>-o-o-o-o-o-o-o-o-o-o-o-</p>
                <h2 className="text-center fw-bold color-one my-1">Update Toy</h2>
                <p className='color-one text-center mb-4'>-o-o-o-o-o-o-o-o-o-o-o-</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='color-one fw-bold'>Price</Form.Label>
                    <Form.Control type="number" step='any' name='price' defaultValue={toy.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='color-one fw-bold'>Quantity</Form.Label>
                    <Form.Control type="number" name='quantity' defaultValue={toy.quantity} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='color-one fw-bold'>Detail Description</Form.Label>
                    <Form.Control className='mb-4' as="textarea" name="description" defaultValue={toy.description} rows={3} required />
                </Form.Group>
                <button className='addtoy-btn text-white border-0 rounded-3 px-5 py-2 d-block mx-auto' type="submit">
                    Submit
                </button>
            </Form>
        </Container>
    );
};

export default UpdateToy;