import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Topbar from '../DashboardNavbar/Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';


const Review = () => {
    const [googleSignIn, setGoogleSignIn] = useContext(UserContext)
    const [addReview, setAddReview] = useState({})
    
    const handleBlur = e => {
        const newReview = {...addReview};
        newReview[e.target.name] = e.target.value;
        setAddReview(newReview);
    }

    const handleReview = (e) => {         
            const newReview = {...googleSignIn,  ...addReview}
            fetch('https://powerful-castle-90702.herokuapp.com/addReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview)
            })
            .then(res => res.json())
            .then(data => {                
                if(data){    
                    alert('Review successfully');
                }    
            }) 
            e.preventDefault()           
    }

    return (
        <div> 
            <Topbar/>
           <Row xs={12}>               
                <Col md={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={10} className=" bg-light">              
                    <Container className='m-5 order-form-container'>
                    <Form >
                        <Row xs={12} className='p-5'>
                            <Col md={5}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control value={googleSignIn.name} name="name" type="text" placeholder="Your name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicDesignation">
                                    <Form.Control onBlur={handleBlur} name="companyName" type="test" placeholder="Company's name, Designation" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onBlur={handleBlur} name="description" as="textarea" rows="5" placeholder='Description'/>
                                </Form.Group>
                                <Button onClick={handleReview} type="submit" className='btn-dark px-3 py-1'>Submit</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Review; 