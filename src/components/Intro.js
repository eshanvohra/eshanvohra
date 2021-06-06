import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import myphoto from './myphoto.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Intro = () => {
    return (
        <div className='container introContainer '>
            <div className="left" data-aos="zoom-out-right"  data-aos-duration="3000">
                Hello I'm,
                <br/>
                <span className="salutation"> Eshan Vohra</span>
                <p className='desc'>A versatile programmer and developer who loves to solve problems
                and always ready for learning. Currently exploring MERN stack technologies. Interested in technologies like AWS, Big Data, etc. </p>
            </div>
            <div className="right text-center " data-aos="zoom-out-left" data-aos-delay="100"
        data-aos-duration="2000"><img className="img-fluid" src={myphoto}/></div>
        </div>
        
    )
}

export default Intro;