import React from 'react';

const ServiceDetails = ({service}) => {
    const{ img, name, desc} = service 
    return (
        <div className="col-md-4">
            {img}
            <p>{name}</p>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceDetails;