import React from 'react';
import { FaSnowflake, FaSun } from 'react-icons/fa'; 



export default function SnowEffectButton({ showSnow, setShowSnow }) {
  const toggleSnow = () => {
    setShowSnow(prevState => !prevState); 
  };

  return (
    <div>
      <button className="icon" onClick={toggleSnow} style={{ border: "none", display: 'flex', alignItems: 'center', backgroundColor:"transparent", fontSize: "1em", cursor: "pointer"}}>
        {showSnow ? <FaSun /> : <FaSnowflake/>} 
      </button>
    </div>
  );
}
