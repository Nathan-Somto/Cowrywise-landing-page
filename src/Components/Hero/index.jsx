import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlay, FaPlayCircle, FaStopCircle } from "react-icons/fa";
import "./Hero.css";
import thumbnail1 from "../../Assets/Home/thumbnail1.png";
import thumbnail2 from "../../Assets/Home/thumbnail2.png";
import thumbnail3 from "../../Assets/Home/thumbnail3.png";
import wura_video from "../../Assets/Home/wura_video.mp4";
import mayokun_video from "../../Assets/Home/mayokun_video.mp4";
import heroData from "../../Data/heroData";
function Hero() {
  const [video, setVideo] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [index, setIndex] = useState(0);
  const thumbnailContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.35,
        staggerChildren: 0.25,
      },
    },
  };
  const thumbnailItem = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: "easeIn",
        delay: i * 0.3,
      },
    }),
  };
  const container = {
    hidden: {
      y: 400,
    },
    show: {
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.65,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: [0, 0, 0, 1],
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  function playVideo(index) {
    setVideo({ ...video, [index.toString()]: true });
  }
  function stopVideo(index) {
    setVideo({ ...video, [index.toString()]: false });
  }
  function handleImageChange(index) {
    setIndex(index);
  }

  const heading = "Put your money to work.";
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3];

  const videos = [wura_video, mayokun_video];
  const { poster, author, quote, username, backgroundColor } = heroData[index];
  return (
   
      <header className="hero__section">
        <div className="hero__section__left">
          <AnimatePresence mode="wait">
            <motion.div
              className="hero__section--bg"
              initial={{ x: "-100vh" }}
              key={`bg__${index}`}
              animate={{ x: ["-50vh", "0vh"] }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              style={{ backgroundColor }}
            >
              <motion.div
                className="thumbnail__container"
                varaints={thumbnailContainer}
                initial={"hidden"}
                whileInView={"show"}
              >
                {thumbnails.map((image, imageIndex) => (
                  <motion.img
                    custom={index}
                    variants={thumbnailItem}
                    src={image}
                    key={imageIndex}
                    alt={`thumbnail ${imageIndex + 1}`}
                    onClick={() => handleImageChange(imageIndex)}
                    className={`${index === imageIndex? '':"grey"}`}
                  />
                ))}
              </motion.div>
            </motion.div>
            {!video[index] ? (
              <motion.figure
                className="hero__section__poster"
                key={index}
                exit={{ x: "0vh", scale: 0.5, opacity: [0.5, 0.5, 0] }}
                initial={{ x: "10vh", scale: 0.5 }}
                animate={{ x: "0vh", scale: [0.4, 0.5, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                }}
              >
                {index !== 2 ? (
                  <div className="hero__play--button">
                    <FaPlayCircle
                      size="30"
                      color="inherit"
                      onClick={() => playVideo(index)}
                    />
                  </div>
                ) : (
                  ""
                )}
                <img src={poster} alt="wura poster" />
              </motion.figure>
            ) : (
              <div className="hero__section__poster">
                <motion.video
                  autoPlay
                  playsInline
                  loop
                  key={index}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, stiffness: 100 }}
                  exit={{ x: "0vh", scale: 0.5, opacity: [0.5, 0.5, 0] }}
                  initial={{ scale: 0.5, opacity: 0 }}
                >
                  <source
                    src={videos[index]}
                    type="video/mp4"
                  />
                </motion.video>
                <div className="hero__play--button">
                  <FaStopCircle
                    size="30"
                    color="inherit"
                    onClick={() => stopVideo(index)}
                  />
                </div>
              </div>
            )}
          </AnimatePresence>
          <div className="hero__section__card">
            <p>{quote}</p>
            <div className="hero__section__bottom__card">
              <p>{author}</p> <p>{username}</p>
            </div>
          </div>
        </div>
        <div className="hero__section__right">
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={container} initial={"hidden"} animate={"show"}>
              {heading.split(" ").map((word, index) => (
                <motion.span variants={item} key={index}>
                  {word + " "}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <motion.p
            initial={{ scale: 0 }}
            transition={{
              delay: 2.25,
              ease: "easeIn",
              duration: 0.5,
              stiffness: 10,
            }}
            animate={{ scale: [0, 0, 0.5, 1] }}
          >
            Build discipline, access financial tools that steadily grow your
            finances.
          </motion.p>
          <form className="hero__section__form">
            <label htmlFor="email" className="hero__section__input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email..."
                className="hero__section__input--box"
              />
            </label>
            <button className="btn btn-shadow">Start Investing</button>
          </form>
        </div>
      </header>
    
  );
}

export default Hero;
