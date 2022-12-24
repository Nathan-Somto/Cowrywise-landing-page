import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import {useEffect,useState,useRef} from 'react';
function useInview(ref){
const [animate, setAnimate] =useState(false);
   /*  useEffect =(() => {
   function reveal (){
            let windowHeight = window.innerHeight;
            let elementTop = ref.current.getBoundingClientRect().bottom;
            let elementVisible = 196;
            console.log("working");
            return setAnimate(windowHeight - elementTop > 20);
           
       
    }
    window.addEventListener("scroll",reveal); 
    return () => window.removeEventListener("scroll",reveal);   
}, [ref,animate])
return animate;
}; */
}

const Card = ({index, item ,getStyles}) => {
    
    
  return (
   /*  <div className='container card' key ={index} style ={{backgroundColor : item.color}} > */
    <motion.div  key ={index} style ={{backgroundColor : item.color}}  className='container card'  useInView ={{x: 0}}
    initial = {index % 2 === 0 ? {x: 0} : {x: -100}} > 
      <h3>{item.heading3}</h3>
      <h2>{item.heading1}</h2>
      <p>{item.para}</p>
      <a href="#">{item.art}</a>
      <img className="cardImg" alt="image" src={item.img}></img>
    </motion.div> 
  );
};
export default Card;
