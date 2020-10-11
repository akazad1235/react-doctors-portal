import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
 import fluorid from '../../../images/fluorid.png';
 import cavity from '../../../images/cavity.png';
 import teath  from '../../../images/teath.png';



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
        <div className="text-center mt-3">
            <section >
                <h5>Our Services</h5>
                <h3 className="">Service We Provide</h3>
            </section>
             <div className="d-flex justify-content-center">
                <div className="w-75 row mt-4" >
                    {
                        service.map( service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;