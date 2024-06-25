import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../src/Images/iwatch.png'
export default function Header({count}) {
  AOS.init();
  return (
    <div>
      <div data-aos="fade-right"
        
        
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
        <h1 style={{transform: "translateY(+120%)", fontSize:"50px" , marginRight:"25px"}}>COUNTER APP</h1>
        </div>
        <div data-aos="fade-up"
        
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
       <div>
       <h1 style={{ transform: "translateY(+255%)", marginRight:"10px", fontSize:"80px"}}>{count}</h1> 
       
          <img src={img} style = {{minHeight:"10px", minWidth:"10px", color:"white", marginBottom:"10px"}} className="logo" alt='' />
        
          </div>
      </div>
    </div>
  )
}
