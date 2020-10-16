import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import './AddService.css'
import upload from '../../../../images/logos/upload.png'
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';


const AddService = () => {
    const [googleSignIn, setGoogleSignIn] = useContext(UserContext)
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleAddService = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', addService.title)
        formData.append('description', addService.description)
        formData.append('name', googleSignIn.name)
        formData.append('email', googleSignIn.email)

      
        fetch('https://powerful-castle-90702.herokuapp.com/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9} >
                    <h4 className='mt-4 ml-5'>Add Service</h4>
                    <Container className='m-5 add-service-form-container'>
                    <Form >
                        <Row xs={12} className='p-4'>
                            <Col md={6}>
                                <Form.Label>Service Title</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={handleBlur} name="title" type="text" placeholder="Enter title" />
                                
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onBlur={handleBlur} as="textarea" rows="5" name="description" placeholder='Enter designation'/>
                                </Form.Group>
                            </Col>
                            <Col md={6} className='mt-3 '>
                                <div className='file-upload' 
                                    style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                    <input onChange={handleFileChange} type="file" name="file"/>
                                    <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                </div>
                                
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                    <Button onClick={handleAddService}  className='float-right mt-2' style={{background:'#009444'}} type="submit">
                        Submit
                    </Button>
                        
                </Col>
            </Row>
        </div>
    );
};

export default AddService;