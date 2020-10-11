import React from 'react';
import './MakeAppoinment.css'
import doctors from '../../images/doctors.png'

const MakeAppoinment = () => {
    return (
       <section className="make-appoinment">
           <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <img src={doctors} alt=""/>
                    </div>
                    <div className="col-md-7 text-white mt-5">
                        <h3 className="text-primary">Appoinment</h3>
                        <h2 className="text-white">Make An Appoinment <br/>Today</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corporis alias accusantium. Ex accusantium voluptates, repellendus libero eligendi voluptatum inventore nobis omnis atque tempore dolore placeat necessitatibus? Assumenda, odio velit.</p>
                        <button className="btn btn-primary">Lean More</button>
                    </div>
                </div>
                
           </div>
       </section>
    );
};

export default MakeAppoinment;