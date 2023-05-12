import { motion } from "framer-motion"
import Nav from "../../Components/AuthNav"
import Main from "../../Components/Signup"
function Signup() {
  const signupVariants={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{
            duration:0.5,
            ease:'linear',
            delayChildren:2
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
  return (
    <motion.div className="signup" variants={signupVariants} initial={'hidden'} animate={'show'} exit={'exit'}>
     <Nav/>
      <Main/>
    </motion.div>
  )
}

export default Signup