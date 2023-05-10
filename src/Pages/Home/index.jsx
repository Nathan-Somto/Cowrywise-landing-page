import { useState,useEffect } from "react";
import {motion} from "framer-motion";
import Navbar from "../../Components/HomeNav";
import Hero from "../../Components/Hero";
import Perks from "../../Components/Perks";
import Setup from "../../Components/Setup";
import Security from "../../Components/Security";
import Reasons from "../../Components/Reasons";
import Signup from "../../Components/HomeSignup";
import TopFooter from "../../Components/TopFooter";

function Home() {
  const homeVariants={
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
    <motion.div variants={homeVariants} initial={'hidden'} animate={'show'} exit={'exit'}>
      <Navbar />
      <Hero />
      <main>
      <Perks />
      <Setup />
      <Security />
      <Reasons />
      <Signup />
      </main>
      <TopFooter/>
    </motion.div>
  );
}

export default Home;
