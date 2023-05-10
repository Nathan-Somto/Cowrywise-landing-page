import {motion} from 'framer-motion';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
function Loader() {
    const navigate = useNavigate();
    useEffect(()=>{
        
        setTimeout(()=>{
           navigate('/home')
        },6000);
      },[])
     const words = 'Plan Save Invest';
     const loadingVariants={
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition:{
                duration:0.5,
                ease:'linear',
                delayChildren:1
            }
        },
        exit:{
            opacity:0, 
            transition:{
                duration:0.5,
                ease:'linear',
                delay:0.35
            }
        }
     }
     const containerVariants={
        hidden:{
        },
        show: i => ({
            transition:{
                delay: i * 0.5,
                staggerChildren:0.5,
                delayChildren:i * 0.55,
                duration:0.65,     
            }
        })
     }
     const spanVariants = {
        hidden:{
            y: 400  
        },
        show:{
            y:[300,200,100,50,20,10,0],
            transition:{
                type:'spring',
                duration:0.55,
                ease:[0.85,0.75,0.35,0.01],
                bounce:0.25,   
            }
        }
     }
     const pathVariants ={
        hidden:{
           scale:0,
           rotate:0
        },
        show:{
          scale:[0.5,0.5,0.5,0.5,1,1],
          rotate:360,
            transition:{
            delay:0.5,
            duration:2,
            ease:'easeInOut'
            }
        }
     }
  return (
    <motion.div className='loading__container' variants={loadingVariants} initial={'hidden'} animate={'show'} exit={'exit'}>
        <motion.svg custom={2} variants={containerVariants} initial={'hidden'}  animate={'show'} version="1.1" height={'100'} 
        width={'100'} fill="#fff" id="Layer_1"
        viewBox="0 0 42 42"
        /*  xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"   */ /* style="enable-background:new 0 0 42 42;" */ xmlSpace="preserve">
 <g>
  <motion.path variants={pathVariants} className="st0" d="M21,0H9.2l0,0L7.6,3H21c9.9,0,18,8.1,18,18c0,9.9-8.1,18-18,18c-9.9,0-18-8.1-18-18c0-1.9,0.3-3.8,0.9-5.5h3.4
		c-2.4,6-0.6,12.9,4.4,17c5,4.1,12.2,4.4,17.5,0.8c5.4-3.6,7.8-10.4,5.9-16.6C33.2,10.5,27.5,6.2,21,6.2H5.8l-1.6,3H21
		c5.3,0,9.9,3.5,11.3,8.6c1.4,5.1-0.8,10.5-5.3,13.2c-4.5,2.7-10.3,2.1-14.2-1.6c-3.8-3.6-4.8-9.4-2.3-14.1h3.9
		c-5.9,7,1.8,17.1,10.1,13.3c8.3-3.8,5.6-16.3-3.6-16.3H2.4l-1.6,3C0.2,17.3,0,19.1,0,21c0,11.6,9.4,21,21,21c11.6,0,21-9.4,21-21
		C42,9.4,32.6,0,21,0L21,0z M21,15.5c3.1,0,5.6,2.4,5.6,5.5c0,3.1-2.5,5.6-5.6,5.5C13.7,26.4,13.7,15.6,21,15.5L21,15.5z">
  </motion.path>
 </g>
</motion.svg>

        <motion.p variants={containerVariants} initial={'hidden'} custom={6}  animate={'show'} style={{overflow:'hidden'}}>
            {words.split(' ').map( word=> <motion.span variants={spanVariants} key={word}>{word+" "}</motion.span>)}
        </motion.p>
    </motion.div>
  )
}

export default Loader