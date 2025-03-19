import "./hero.scss";
import { motion } from "framer-motion";
import { TextHoverEffect } from "../TextHoverEffect/TextHoverEffect";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = ({ portfolioRef, contactRef }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SUMIT KUMAR</motion.h2>

          <motion.h1 variants={textVariants} className="hoverTextEffect">
            <TextHoverEffect 
              texts={["Web Developer", "Software Developer", "Fullstack Developer"]} 
              duration={0.5} 
              width="100%" 
              height="auto" 
            />
          </motion.h1>

          {/* Updated Buttons with Hover and Click Effects */}
          <motion.div variants={textVariants} className="buttons">
          <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
  whileTap={{ scale: 0.9 }}
  transition={{ duration: 0.2 }}
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  }}
>
  See the Latest Works
</motion.button>

<motion.button
  whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
  whileTap={{ scale: 0.9 }}
  transition={{ duration: 0.2 }}
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Contact Me
</motion.button>


          </motion.div>


          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software | Frontend | Backend Developer
      </motion.div>
    </div>
  );
};

export default Hero;
