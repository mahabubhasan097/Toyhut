import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';


const ShopByCategory = () => {
  const {user} = useContext(AuthContext)
  const [toys, setToys] = useState([]);


  useEffect(() => {
    fetchToys();
  }, []);


  const fetchToys = async () => {
    try {
      const response = await fetch('https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars');
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };

  const handleViewToy = (id) => {
    if (user) {
      window.location.href = `/toy/${id}`;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to view details',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = `/toy/${id}`;
        }
      });
    }
    
  };


  const renderToys = (subCategory) => {
    const filteredToys = toys.filter((toy) => toy.subCategory === subCategory);


    return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {filteredToys.map((toy) => (
          <div key={toy._id} className="col">
            <Card className="h-100 p-3 shadow bg-color-two border-0" data-aos="zoom-in-up">
              <Card.Img variant="top" className="tab-image w-100" src={toy.picture} />
              <Card.Body className='text-center'>
                <Card.Title className='color-one fw-bold font-20'>{toy.name}</Card.Title>
                <Card.Text className='fw-bold font-13'>
                  Price: ${toy.price}
                  <br />
                  Rating: {toy.rating}
                </Card.Text>
                {/* to={`/toy/${toy._id}`} */}
                <Link  onClick={()=>handleViewToy(toy._id)} className='border-0 text-white px-3 py-2 view-btn rounded-3 text-decoration-none my-1 d-inline-block shadow font-13' > View Details </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };


  return (
    <Container className="my-lg-5 p-0" fluid>
      <div className="shop-category-banner text-center py-5 my-3 my-lg-0">
        <div className="z-two position-relative">
          <h1 className="m-0 bg-dark d-inline-block py-2 px-4 rounded-5 bg-white fw-bold">Shop By Category</h1>
          <span className="d-block text-white">o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o</span>
        </div>
      </div>


      <Container className="my-4">
        <Tabs>
          <TabList>
            <Tab>Sports Car</Tab>
            <Tab>Regular Car</Tab>
            <Tab>Truck</Tab>
          </TabList>


          <TabPanel>
            {renderToys('Sports Car')}
          </TabPanel>
          <TabPanel>
            {renderToys('Regular Car')}
          </TabPanel>
          <TabPanel>
            {renderToys('Truck')}
          </TabPanel>
        </Tabs>
      </Container>
    </Container>
  );
};


export default ShopByCategory;




