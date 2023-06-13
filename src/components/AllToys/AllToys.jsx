import React, { useEffect, useState } from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const [toys, setToys] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        const response = await fetch('https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars?limit=20');
        const data = await response.json();
        setToys(data);
    };

    const handleShowMore = async () => {
        const response = await fetch(`https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars?limit=${toys.length + 20}`);
        const data = await response.json();
        setToys(data);
        setShowAll(true);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // Filter toys based on the search term
        const filteredToys = toys.filter((toy) =>
            toy.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setToys(filteredToys);
    };

    return (
        <Container className='my-5'>
            <Form className='mb-4 d-flex' onSubmit={handleSearch}>
                <Form.Group className='me-2 flex-grow-1'>
                    <Form.Control type='text' placeholder='Search by Toy Name' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='border border-warning'/>
                </Form.Group>
                <button type='submit' className='text-white shadow border-0 rounded-3 py-2 px-5 search-btn'>
                    Search
                </button>
            </Form>
            <Table striped bordered hover responsive>
                <thead className='text-center color-one bg-color-one border border-info'>
                    <tr>
                        <th>-No-</th>
                        <th>-Seller-</th>
                        <th>-Toy Name-</th>
                        <th>-Sub-category-</th>
                        <th>-Price-</th>
                        <th>-Available Quantity-</th>
                        <th>-View Details-</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {toys.map((toy, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{toy.sellerName ? toy.sellerName : '-'}</td>
                            <td>{toy.name}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <Link
                                    to={`/toy/${toy._id}`}
                                    className='border-0 text-white px-3 py-2 view-btn rounded-3 text-decoration-none my-1 d-inline-block'
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {!showAll && (
                <div className='text-center'>
                    <button className='text-white shadow border-0 px-4 rounded-3 py-2 showmore-btn' onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </Container>
    );
};

export default AllToys;
