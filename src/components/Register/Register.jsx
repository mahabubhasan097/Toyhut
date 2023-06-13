import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import signupgif from "../../assets/signup.gif"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
const Register = () => {
    useTitle('Sign Up')
    const { createUser, logOut } = useContext(AuthContext);
    const [regError, setRegError] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        setRegError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setRegError('');
                updateUserData(loggedUser, name, photo);
                Swal.fire(
                    'Nice!',
                    'User has been created successfully',
                    'success'
                )
                logOut()
                    .then(() => {
                        setRegError('');
                        // Sign-out successful.
                    }).catch((error) => {
                        setRegError(error);
                    });
                form.reset();
            })
            .catch((error) => {
                setRegError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops something is wrong...',
                    text: error.message
                  })
            });

        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {

                })
                .catch(error => {
                    setRegError(error.message);
                })
        }
    }

    return (
        <Container>
            <Form className='bg-color-one p-4 mx-auto my-5 rounded-3 shadow' onSubmit={handleSignUp}>
                <Row className="">
                    <Col xs={12} md={6}>
                        <img src={signupgif} className='w-100 rounded-3' alt="" />
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center'>
                        <div className='flex-grow-1'>
                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter name" required/>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required/>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Photo URL</Form.Label>
                                <Form.Control type="text" name='photo' placeholder="Enter photo url" />
                            </Form.Group>

                            <input type="submit" value="Sign Up" className='log-btn px-5 py-2 text-white border-0 rounded-3 d-block mx-auto mb-4' />
                            <small className='d-block text-center'>Already have an account? <Link to='/login' className='color-one'>Login</Link> </small>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Register;