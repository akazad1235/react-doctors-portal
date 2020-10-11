import React from 'react';
import chair from '../../../images/chair-1.png'

const HeaderMain = () => {
    return (
        <div className="row d-flex align-items-center" style={{height: '600px'}}>
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br/>Start Here</h1>
                <p className="text-secondary">Your New SmileYour New SmileYour New SmileYour New SmileYour New SmileYour New SmileYour New Smile</p>
                <button className="btn btn-primary">Get Appoinment</button>
            </div>
            <div className="col-md-6 ">
                <img src={chair} alt="" className="img-fluid"/>
            </div>


        </div>
    );
};

export default HeaderMain;