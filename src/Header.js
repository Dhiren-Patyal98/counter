import React from 'react'
import img from '../src/Images/iwatch.png'
export default function Header({count}) {
  return (
    <div>
        <h1 style={{transform: "translateY(+120%)", fontSize:"50px" , marginRight:"25px"}}>COUNT APP</h1>
       <div>
       <h1 style={{ transform: "translateY(+255%)", marginRight:"10px", fontSize:"80px"}}>{count}</h1> 
       
          <img src={img} style = {{minHeight:"10px", minWidth:"10px", color:"white", marginBottom:"10px"}} className="logo" alt='' />
        
        
      </div>
    </div>
  )
}
