import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const background =
    type === "services"
      ? "linear-gradient(180deg, #111132, #0c0c1d)"
      : type === "skills"
      ? "linear-gradient(180deg, #22223B, #1A1A2E)"
      : "linear-gradient(180deg, #111132, #505064)";

  const heading =
    type === "services"
      ? "What I Do?"
      : type === "skills"
      ? "My Skillset"
      : "What I Did?";

  return (
    <div className="parallax" ref={ref} style={{ background }}>
      <motion.h1 style={{ y: yText }}>{heading}</motion.h1>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};

export default Parallax;