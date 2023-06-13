import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsFill1SquareFill, BsFill2SquareFill, BsFill3SquareFill, BsFill4SquareFill, BsArrowReturnRight } from "react-icons/bs";
import useTitle from '../../hooks/useTitle';
const Blogs = () => {
  useTitle('Blogs')
  return (
    <Container>
      <div className='blogs-banner rounded-3'>
       
      </div>
      <Row>
        <Col md={6} className='mb-4'>
          <Card className="h-100 blog-card">
            <Card.Body>
              <Card.Title className='fw-bold color-one bg-dark p-2 rounded-3'><BsFill1SquareFill className='mb-1'></BsFill1SquareFill> What is an access token and refresh token?</Card.Title>
              <Card.Text>
                <BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight> A refresh token is used to get a new access token when the existing one expires, whereas an access token is a credential needed to access resources that are protected. Refresh tokens have a longer lifespan than access tokens, which are both temporary. Depending on the security requirements of the application, access tokens and refresh tokens should be safely kept on the client side, for example, in HTTP-only cookies, local storage with cautions, or token-based storage solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mb-4'>
          <Card className="h-100 blog-card">
            <Card.Body>
              <Card.Title className='fw-bold color-one bg-dark p-2 rounded-3'><BsFill2SquareFill className='mb-1'></BsFill2SquareFill> Compare SQL and NoSQL databases</Card.Title>
              <Card.Text>
                <h5><BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight>SQL Databases:</h5>
                <ul>
                  <li>Structured data with a predefined schema</li>
                  <li>Tabular data model with rows and columns</li>
                  <li>SQL query language</li>
                  <li>Vertical scalability</li>
                  <li>Well-suited for complex queries and strict consistency requirements</li>
                </ul>


                <h5><BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight>NoSQL Databases:</h5>
                <ul>
                  <li>Flexible schema and support for unstructured data</li>
                  <li>Various data models (key-value, document, columnar, graph)</li>
                  <li>Non-SQL query languages or APIs</li>
                  <li>Horizontal scalability</li>
                  <li>Ideal for handling large volumes of unstructured data and high scalability needs</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mb-4'>
          <Card className="h-100 blog-card">
            <Card.Body>
              <Card.Title className='fw-bold color-one bg-dark p-2 rounded-3'><BsFill3SquareFill className='mb-1'></BsFill3SquareFill> What is Express.js? What is Nest.js?</Card.Title>
              <Card.Text>
                <h5>Express.JS</h5>
                <p><BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight>Express is a well-liked and compact web application framework for Node.js. It offers a selection of capabilities and resources for creating APIs and web apps. Developers can build routes, process HTTP requests and answers, and construct middleware with Express.js. It is renowned for its clean aesthetic and user-friendliness and provides a straightforward and versatile method for developing server-side applications.</p>


                <h5>Next.JS</h5>
                <p><BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight>A scalable, modular framework for TypeScript server-side application development is Nest.js. It is based on Express.js and takes inspiration from Angular. The key features of Nest.js are dependency injection, code structuring, and built-in support for middleware and routing. Building intricate, business-grade applications with TypeScript is a good fit.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mb-4'>
          <Card className="h-100 blog-card">
            <Card.Body>
              <Card.Title className='fw-bold color-one bg-dark p-2 rounded-3'><BsFill4SquareFill className='mb-1'></BsFill4SquareFill> What is MongoDB aggregate and how does it work?</Card.Title>
              <Card.Text>
              <BsArrowReturnRight className='mb-1 me-2'></BsArrowReturnRight>Data records are processed during an aggregate operation, which then returns calculated results. JavaScript allows us to aggregate data on the client side, but we can also utilize MongoDB to perform server-side operations on collections that are stored in the database before returning the results to the client. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Blogs;






















