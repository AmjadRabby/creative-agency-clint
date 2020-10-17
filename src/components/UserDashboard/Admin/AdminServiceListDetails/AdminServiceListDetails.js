import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AdminServiceListDetails = ({service}) => {

    // const [pending, setPending]=useState(service.status.toLowerCfire

    // const statusHandler=(e)=>{

    // }
    return (
        
        <tr style={{ fontWeight:'400',}}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.title}</td>
            <td>{service.description}</td>
            <td style={{color:'#FF4545'}}>{service.status}</td>
            <td>
            {/* {
                pending &&
                 <Form.Control as="select" className='text-danger' onChange={statusHandler}>
                    <option  selected style={{color:'#FF4545'}}>Pending</option>
                    <option style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
            {
                !pending &&
                <Form.Control className='text-success' as="select" onChange={statusHandler}>
                    <option style={{color:'#FF4545'}}>Pending</option>
                    <option selected style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
         */}

            </td>
            
        </tr>
    );
};

export default AdminServiceListDetails;