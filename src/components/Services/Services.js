import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import {fluorid} from '../../images/001-dental.png'
import {cavity} from '../../images/tooth (1).png'
import {teath} from '../../images/tooth.png'

const Services = () => {
    const service = [
        {
            img:fluorid,
            name:'Fluorid Treatment',
            desc:'It is a long established fact that a reader will be distracted by the readable conten'
        },
        {
            img:cavity,
            name:'Cavity Felling',
            desc:'It is a long established fact that a reader will be distracted by the readable conten'
        },
        {
            img:teath,
            name:'Teath Whaytering ',
            desc:'It is a long established fact that a reader will be distracted by the readable conten'
        },
    ]
    return (
        <div>
            <section>
                <h5>Our Services</h5>
                <h3>Service We Provide</h3>
            </section>
             <div className="d-flex justify-content-center">
                <div className="w-75 row" >
                    {
                        service.map( service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;