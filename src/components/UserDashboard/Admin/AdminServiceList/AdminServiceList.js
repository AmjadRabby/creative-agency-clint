import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';

const AdminServiceList = () => {
    const [allOrder, setAllOrder] = useState([])

    useEffect(() => {
        fetch('https://powerful-castle-90702.herokuapp.com/allOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, [])

    return (
        <div>
             <Row xs={12}>
                
                <Col md={9} >
                    <h4 className='mt-4 ml-5'>Service List</h4>
                    <Container className='mt-5 admin-service-list-container'>
                            <Table responsive="xs" className='admin-service-list-table' >
                                <thead className='admin-service-list-table-head'>
                                    <tr>
                                        <th style={{width:'20%'}}>Name</th>
                                        <th style={{width:'20%'}}>Email ID</th>
                                        <th style={{width:'20%'}}>Service</th>
                                        <th style={{width:'25%'}}>Project Details</th>
                                        <th style={{width:'10%'}}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrder.map(service=>{
                                            return <AdminServiceListDetails key={service._id} service={service}></AdminServiceListDetails>
                                        })
                                    }
                                </tbody>
                            </Table>
                            
                    </Container>
                </Col>
                </Row>
            
        </div>
    );
};

export default AdminServiceList;