import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DownloadCardData from "../../Data/DownloadCardData";
import Downloadcard from "../DownloadCard";
import "./reasons.css";

function Reasons() {
  const textIndexRef = useRef(0);
  const h2Ref = useRef(null);
  const spanRef = useRef(null);
  const texts = [
    "Saving Charges",
    "Got SEC license? ",
    "Great Interest Rates?",
    "Convinced",
  ];
  const spans = [
    "Nope", 
    "Yup",
    "Confam", 
    "Sign Up"
    ];
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        duration: 3,
       
      },
    },
  };
  const spanVariants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0 ,
        transition:{
            duration:0.25

        }
    },
  };
  function changeText() {
    textIndexRef.current = (textIndexRef.current + 1) % texts.length;
    h2Ref.current.key = texts[textIndexRef.current];
 spanRef.current.key =spans[textIndexRef.current];
  }
  console.log(h2Ref.current);
  return (
    <section className="reasons__section">
      <h3 className="reasons__section__question">WHY COWRYWISE ?</h3>
      <AnimatePresence>
        <div  style={{overflow:"hidden"}}>
        <motion.h2
          className="reasons__section__reason"
          ref={h2Ref}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          /* exit="hidden" */
          key={texts[textIndexRef.current]}
         
         
        >
          {texts[textIndexRef.current]}{" "}
          
        <motion.span
            className="reasons__section__answer"
            ref={spanRef}
            variants={spanVariants}
            /* onAnimationComplete={changeText} */
            key={spans[textIndexRef.current]}
          >
            {spans[textIndexRef.current]}{" "}
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
/*








  useEffect(() => {
    const timeoutId = setTimeout(() => {
      textIndexRef.current = (textIndexRef.current + 1) % texts.length;
      h1Ref.current.key = textIndexRef.current;
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const currentText = texts[textIndexRef.current];

  const charElements = currentText.split("").map((char, index) => {
    return (
      <motion.span
        key={index}
        variants={charVariants}
        initial="hidden"
        animate="visible"
      >
        {char}
      </motion.span>
    );
  });

  return (
    <div style={{ height: "50vh", display: "flex", alignItems: "center" }}>
      <AnimatePresence>
        <motion.h1
          ref={h1Ref}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        >
          {charElements}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
} 
 */
