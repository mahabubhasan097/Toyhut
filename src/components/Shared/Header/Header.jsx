import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/toyhutLOGO.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container className='bg-color-one' fluid>
            <Navbar expand="lg">
                <Container>
                    <Link to="/"><img src={logo} className='logo' alt="" /></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 n-link"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none text-secondary fw-bold mx-lg-3 text-center' to='/'>Home</Link>
                            <Link className='text-decoration-none text-secondary fw-bold mx-lg-3 text-center' to='/alltoys'>All Toys</Link>
                            {user && <>
                                <Link className='text-decoration-none text-secondary fw-bold mx-lg-3 text-center' to='/mytoys'>My Toys</Link>
                                <Link className='text-decoration-none text-secondary fw-bold mx-lg-3 text-center' to='/addtoy'>Add Toy</Link>
                            </>}
                            <Link className='text-decoration-none text-secondary fw-bold mx-lg-3 text-center' to='/blogs'>Blogs</Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {user && <img className='mg-sm' title={user.displayName ? user.displayName : "No name"} style={{ width: "45px", height: "45px", borderRadius: "50%" }} src={user.photoURL} alt="" />}
                            {user ? <Link className='border-0 text-white text-decoration-none rounded-3 px-3 py-2 auth-btn ms-lg-2' onClick={handleLogOut}>Logout</Link> : <><Link to='/login' className='border-0 text-decoration-none text-white rounded-3 px-3 py-2 auth-btn'>Login</Link>
                                <Link to='/signup' className='border-0 text-decoration-none text-white rounded-3 px-3 py-2 auth-btn ms-lg-2 mg-sm'>Sign Up</Link></>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;