import { useState } from 'react'
import './App.css'
import Header from './Header'
import CouterApp from './CouterApp'
import image from '../src/Images/vintage-textured-paper-background-vector.jpg'

export default function Counterapp() {
  
  const myStyle = {
    
      backgroundImage:`url(${image})`,
      minHeight:"100vh",
      minWidth:"100vw",
      backgroundSize:"cover",
      textAlign:"center",
      backgroundPosition: "center",
      position: "fixed",
      top: 0,  
      left: 0,
   
};
    const [count, setCount] = useState(0)
  return (
    <>
    <div style={myStyle}>
      <div style={{marginTop:"10px"}}>
      
      <Header count={count} />
     <CouterApp  setCount={setCount}/>
  
     </div>
    </div>
    </>
  )
}


