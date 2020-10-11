import React from 'react';

const ServiceDetails = ({service}) => {
    const{ img, name, desc} = service
    console.log(service); 
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={img } alt="icon"/>
            <p className="mt-4 mb-4">{name}</p>
            <p className="text-secondary">{desc}</p>
        </div>
    );
};

export default ServiceDetails;