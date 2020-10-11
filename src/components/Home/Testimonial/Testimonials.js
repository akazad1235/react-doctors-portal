import React from 'react';
import './Testimonials.css'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonials = [
        {name:'akazad', img:'Ellipse-1.png', state:'california', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, inventore voluptatibus eligendi impedit blanditiis dolorum!'},
        {name:'akazad', img:'Ellipse-2.png', state:'california', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, inventore voluptatibus eligendi impedit blanditiis dolorum!'},
        {name:'akazad', img:'Ellipse-3.png', state:'california', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, inventore voluptatibus eligendi impedit blanditiis dolorum!'}
    ]
    return (
        <section className="testimonials my-5 py-5" >
            <div className="container">
                <div className="section-header">
                    <h4 className="text-uppercase text-primary">testimonial</h4>
                    <h2>Whats Our Patients <br/> Says</h2>
                </div>



                <div className="card-deck mt-5">
                    
                   {
                       testimonials.map( testi => <Testimonial testimonials={testi}></Testimonial>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;