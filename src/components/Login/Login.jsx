import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import logingif from "../../assets/secure-login.gif"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
const Login = () => {
    useTitle('Login')
    const [loginError, setLoginError] = useState('');
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        setLoginError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops something is wrong...',
                    text: error.message
                })
                form.reset();
            });
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
                form.reset();
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error
                });
            })
    }

    return (
        <Container>
            <Form className='bg-color-one p-4 mx-auto my-5 rounded-3 shadow' onSubmit={handleLogin}>
                <Row className="">
                    <Col xs={12} md={6}>
                        <img src={logingif} className='w-100 rounded-3' alt="" />
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center'>
                        <div className='flex-grow-1'>
                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Form.Label className='color-one fw-bold'>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required/>
                            </Form.Group>
                            <input type="submit" value="Login" className='log-btn px-5 py-2 text-white border-0 rounded-3 d-block mx-auto mb-4' />

                            <small className='d-block text-center mb-4'>Don't have an account yet? <Link to='/signup' className='color-one'>Sign Up</Link> </small>
                            <div className='text-center'>
                                <h5 className='fw-bold color-one mb-3'>----------Social Login----------</h5>

                                <button className='border-0 shadow' onClick={handleGoogleSignIn}><FcGoogle className='fs-1'></FcGoogle></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Login;