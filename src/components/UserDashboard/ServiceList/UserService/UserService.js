  
import React, { useContext, useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import { UserContext } from '../../../../App';
import UserServiceDetails from '../UserServiceDetails/UserServiceDetails';


const UserService = () => {
    const [googleSignIn, setGoogleSignIn] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
   
    useEffect(() => {
        fetch('https://powerful-castle-90702.herokuapp.com/bookService?email='+googleSignIn.email)
        .then(res => res.json())
        .then(data => setServiceList(data))
    }, [])

    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            <h4 className='mt-4 ml-5'>Service List</h4>
        {/* <Container> */}
            <Row xs={12} className='align-items-center' style={{marginTop:'10px'}}>
                {
                    serviceList.map(service=> {
                        return <UserServiceDetails service={service}></UserServiceDetails>
                    })
                }
            </Row>
        {/* </Container> */}

    </div>
    );
};

export default UserService;