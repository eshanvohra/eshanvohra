import React from 'react'

import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    return (
        <div className='container mt-5 mb-5 ' data-aos="flip-left" data-aos-duration="3000">
            <h1 className='text-center mt-5 mb-5 titles'>

            My Skills
            </h1>
            <div className='skill-images text-center'>
            
                <img src="https://img.icons8.com/ios-filled/100/000000/react-native.png"  alt="REACT JS"/>
                
                <img src="https://img.icons8.com/windows/96/000000/js-squared.png" alt="JS"/>
                
                <img src="https://img.icons8.com/ios/100/000000/java-coffee-cup-logo--v1.png" alt='java'/>
                <img src="https://img.icons8.com/ios/100/000000/c-plus-plus-logo.png" alt='c++'/>
            </div>
        </div>

    )
}

export default Skills;