import {motion} from 'framer-motion';
import {useEffect,useState,useRef} from 'react';
const Card = ({index, item ,getStyles}) => {    
  const initialState= index % 2 === 0 ? {x: '100%'} : {x: '-100%'};
  return (
    <motion.div   style ={{backgroundColor : item.color}} transition={{type:"spring", bounce:0.5, stiffness:100, duration:0.35}}  className='container card'  whileInView ={{x: '0%'}}
    initial = {initialState} > 
      <h3>{item.heading3}</h3>
      <h2>{item.heading1}</h2>
      <p>{item.para}</p>
      <a href="#">{item.art}</a>
      <img className="cardImg" alt="image" src={item.img}></img>
    </motion.div> 
  );
};
export default Card;
