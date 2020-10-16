import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);

    }

    const handleAdmin = (e) => {
       

        fetch('https://powerful-castle-90702.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(admin),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
    }
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} >
                <h4 className='mt-4 ml-5'>Make Admin</h4>
                    <Container className='m-5 add-service-form-container'>
                    <Form >
                        <Row xs={12} className='p-4 align-items-center'>
                            <Col md={5} >
                                <Form.Label>Email</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={handleBlur} name="email" type="text" placeholder="admin@gmail.com" />
                                
                                </Form.Group>
                            </Col>
                           <Col md={2} >
                           <Button onClick={handleAdmin} type="submit" className='float-left float-left btn-sm' style={{background:'#009444',marginTop:'15px'}} type="submit">
                                    Submit
                            </Button>
                           </Col>
                        </Row>
                        </Form>
                    </Container>
                    
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;