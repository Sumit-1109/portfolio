import { useRef, useState } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.1, ease: "easeOut" },
  },
};

const cards = [
  {
    title: "Web Development & Custom Solutions",
    src: "/web.jpg",
    desc: "Create modern, responsive websites, portfolios, e-commerce platforms, and SaaS applications tailored to business needs.",
  },
  {
    title: "UI/UX & Graphic Design",
    src: "/uiux.jpg",
    desc: "Design engaging user interfaces, intuitive experiences, and visually compelling graphics using industry-leading tools.",
  },
  {
    title: "Full-Stack Development & Integrations",
    src: "/fullstack.jpg",
    desc: "Build scalable full-stack applications, integrate third-party services, optimize performance, and enhance security.",
  },
];

const Services = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate="animate">
      {/* Header Section */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your website grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      {/* Title Section */}
      <motion.div className="titleContainer" variants={variants}>
  <div className="title">
    <img src="/people.webp" alt="" />
    <h1>
      {/* Unique (Hover with underline) */}
      <span
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector(".underline").style.transform = "scaleX(1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector(".underline").style.transform = "scaleX(0)";
        }}
      >
        <motion.b whileHover={{ color: "orange" }} className="hoverText">
          Unique
        </motion.b>
        {/* Underline Effect */}
        <span
          className="underline"
          style={{
            position: "absolute",
            bottom: "-3px",
            left: "0",
            width: "100%",
            height: "3px",
            backgroundColor: "orange",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease-in-out",
          }}
        ></span>
      </span>{" "}
      Ideas
    </h1>
  </div>

  <div className="title">
    <h1>
      {/* For Your (Hover with underline) */}
      <span
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector(".underline").style.transform = "scaleX(1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector(".underline").style.transform = "scaleX(0)";
        }}
      >
        <motion.b whileHover={{ color: "orange" }} className="hoverText">
          For Your
        </motion.b>
        {/* Underline Effect */}
        <span
          className="underline"
          style={{
            position: "absolute",
            bottom: "-3px",
            left: "0",
            width: "100%",
            height: "3px",
            backgroundColor: "orange",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease-in-out",
          }}
        ></span>
      </span>{" "}
      Website.
    </h1>
    <button>WHAT I DO?</button>
  </div>
</motion.div>


      {/* Focus Cards Section */}
      <motion.div className="listContainer focusGrid" variants={variants}>
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className={`focusCard ${hovered !== null && hovered !== index ? "blurred" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: hovered !== null && hovered !== index ? 0.6 : 1,
              scale: hovered !== null && hovered !== index ? 0.95 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Blurred Background Image */}
            <img src={card.src} alt={card.title} className={`focusImage ${hovered !== index ? "blurred" : ""}`} />

            {/* Overlay that expands on hover */}
            <motion.div
              className="focusOverlay"
              animate={{ opacity: hovered === index ? 1 : 0.6 }}
            >
              {/* Title fades out, description fades in */}
              <motion.h2 className="focusTitle" animate={{ opacity: hovered === index ? 0 : 1 }}>
                {card.title}
              </motion.h2>

              <motion.div
                className={`focusDescription ${hovered === index ? "visible" : ""}`}
                animate={{ opacity: hovered === index ? 1 : 0 }}
              >
                {card.desc.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
