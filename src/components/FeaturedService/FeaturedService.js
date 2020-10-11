import React from 'react';
import featured from '../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 ">
                    <img style={{width:'300px', marginLeft:'100px'}} src={featured} alt=""/>
                </div>
                <div className="col-md-7  align-self-center">
                    <h1>Exception Dental Care, on your terms</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio rerum error cum consequuntur quibusdam reprehenderit rem aperiam explicabo in.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            
        </div>
        </section>
    );
};

export default FeaturedService;