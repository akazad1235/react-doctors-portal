import React from 'react';



const Testimonial = ({testimonials}) => {
    const {name,img, state,  desc} = testimonials;
    return (
        <div className="card">
            <div className="card-body">
             <p className="card-text">{desc}</p>
            </div>
            <div className="card-footer d-flex">
                <img className="mr-2" style={{width:'60px'}} src={require(`../../../images/${img}`)} alt/>
                <div>
                    <h5 >{name}</h5>
                    <p>{state}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;