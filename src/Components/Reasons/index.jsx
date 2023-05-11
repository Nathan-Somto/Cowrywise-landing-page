import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReasonsData from "../../Data/ReasonsData";
import DownloadCardData from "../../Data/DownloadCardData";
import Downloadcard from "../DownloadCard";
import "./reasons.css";

function Reasons() {
  
    const [reasonIndex, setReasonIndex] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(changeText,4000);
        return ()=> clearTimeout(timer);
    },[reasonIndex, setReasonIndex])
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      scale:0,
    },
    visible: {
      opacity: [0,0,0,1,1,1,1,0],
      y: [100,50,0,0,0,0,0,0,-50],
      scale:[0.5,0.7,0.9,1,1,1,1,1,1],
      transition: {
        duration: 4,
      },
    
    },
    exit:{
      y:200,
      opacity:0.5
    }
  };
  const spanVariants = {
    hidden: { 
        opacity: 0, 
       
    },
    visible: { 
        opacity: 1, 
       
        transition:{
            duration:1,
            delay:2.2,
            ease:"easeIn"

        },
    },
    
  };
  function changeText() {
   setReasonIndex(prevState => (prevState + 1) % ReasonsData.length);
  }
  const {heading,spans,color} = ReasonsData[reasonIndex];
  return (
    <section className="reasons__section">
      <h3 className="reasons__section__question">WHY COWRYWISE ?</h3>
      <AnimatePresence mode="wait" initial={false}>
        <div  style={{overflow:"hidden"}}>
        <motion.h2
          className="reasons__section__reason"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          key={reasonIndex}
        >
          {heading}{" "}
          
        <motion.span
            className=  {`reasons__section__answer ${color? 'primary__blue':""}`}
            variants={spanVariants}
            key={spans}
          >
            {spans}{" "}
          </motion.span>
        </motion.h2>
        </div>
     
      </AnimatePresence>
      <div className="downloadcard__container">
        {DownloadCardData.map((item, index) => (
          <Downloadcard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
export default Reasons;








 
