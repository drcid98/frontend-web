import React, { useState } from "react";
import './Phase.css'

const Phase = () => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const phases = ["Refuerzo", "Ataque", "Fortalecimiento"]

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1));
    };
    if (activeIndex === 4){
        setActiveIndex(3);
    }
  return (
    <div className="Phase">
        <div className="phases">
        <div className="bar">
            <div className={`bar-item ${activeIndex === 0 ? "active" : ""}`} />
            <div className={`bar-item ${activeIndex === 1 ? "active" : ""}`} />
            <div className={`bar-item ${activeIndex === 2 ? "active" : ""}`} />  
        </div>
        <button onClick={handleNext}>{"\u2192"}</button>
        </div>
        <div className="current-phase">
            {activeIndex === 0 && <p>{phases[0]}</p>}
            {activeIndex === 1 && <p>{phases[1]}</p>}
            {activeIndex === 2 && <p>{phases[2]}</p>}
            {activeIndex === 3 && <p>No es tu turno</p>}
        </div>

    </div>
  );
};
      

export default Phase;
