import React, { useEffect, useState, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortBy, setSortBy] = useState('desc');

  useEffect(() => {
    if (user) {
      const url = `https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/myToys?email=${user.email}&sortBy=${sortBy}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => {
          // Handle error
        });
    }
  }, [user, sortBy]);

  const handleSortHighToLow = () => {
    setSortBy('desc');
  };

  const handleSortLowToHigh = () => {
    setSortBy('asc');
  };

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You can't undo your action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b7a11-toy-marketplace-server-side-mahabubhasan097.vercel.app/toyCars/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
              const remaining = myToys.filter(toy => toy._id !== _id);
              setMyToys(remaining);
            }
          })

      }
    })
  }

  return (
    <Container className="my-5">
       <div className="d-flex justify-content-end mb-3">
        <button className="me-2 addtoy-btn text-white border-0 rounded-3 px-5 py-2 shadow" onClick={handleSortHighToLow}>
          Sort High To Low Price
        </button>
        <button className='addtoy-btn text-white border-0 rounded-3 px-5 py-2 shadow' onClick={handleSortLowToHigh}>
          Sort Low To High Price
        </button>
      </div>
      <Table striped bordered hover responsive>
        <thead className="text-center color-one bg-color-one border border-info">
          <tr>
            <th>-No-</th>
            <th>-Seller-</th>
            <th>-Toy Name-</th>
            <th>-Sub-category-</th>
            <th>-Price-</th>
            <th>-Available Quantity-</th>
            <th>-Action-</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {myToys.map((toy, index) => (
            <tr key={toy._id}>
              <td>{index + 1}</td>
              <td>{toy.sellerName ? toy.sellerName : '-'}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link className='bg-white py-1 px-2 d-inline-block shadow mx-2' to={`/updateToy/${toy._id}`} title='Edit'><BsFillPencilFill></BsFillPencilFill></Link>
                <Link className='bg-white py-1 px-2 d-inline-block text-danger shadow mx-2' title='Delete' onClick={() => handleDelete(toy._id)}><BsFillTrashFill></BsFillTrashFill></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyToys;
