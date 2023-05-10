import {motion} from 'framer-motion';
import {useState,useRef} from 'react';
const Card = ({index, data}) => {    
    const {heading3,heading1,para,art,img,color,white} =data;
  return (
    <motion.div style ={{backgroundColor :color}} 
    className={`perks__card ${white?'white':""}`} 
    transition={{ease:[0.35,0.15,0.75,0.15], duration:0.3,delay: index * 0.05}} 
     /*  viewport={{once:true}}  */
      whileInView={{scale:1, opacity:1}}

    initial = {{scale:0, opacity:0}} > 
      <h3>{heading3}</h3>
      <h2>{heading1}</h2>
      <p>{para}</p>
      <a>{art} <span className='perks__card__chevron'>{'>'}</span></a>
      <img className="perks__card__image" alt="image" src={img}></img>
    </motion.div> 
  );
};
export default Card;