import { useRef } from "react";
import "./portfolio.scss";
import MiniLink from "../../../public/MiniLinkManagement.png";
import formbot from "../../../public/formbot.png";
import jobfinder from "../../../public/jobFinder.png";
import pocketNotes from "../../../public/pocketNotes.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Shr-L-ink it",
    img: MiniLink,
    desc: "Developed a web application for secure URL shortening, user authentication, click tracking, analytics, responsive design, metadata tracking, link editing, search filtering, fast processing, and pagination.",
    deploy: "https://link-management-frontend.vercel.app"
  },
  {
    id: 2,
    title: "FormBot",
    img: formbot,
    desc: "Developed a form builder app with user authentication, form and folder management, dashboard sharing, access control, public form sharing, response tracking, analytics, and engagement metrics.",
    deploy: "https://form-bot-frontend-sandy.vercel.app"
  },
  {
    id: 3,
    title: "Job Finder",
    img: jobfinder,
    desc: "Developed a job finder platform with user authentication, job posting, applications, advanced search, filtering, sorting, pagination, and dynamic data updates.",
    deploy: "https://jobfinder-capstone-frontend.onrender.com"
  },
  {
    id: 4,
    title: "Pocket Notes",
    img: pocketNotes,
    desc: "Developed a responsive note-taking app with React.js, React Router, and Context API for seamless note creation, management, and dynamic navigation.",
    deploy: "https://pocket-notes-tawny-rho.vercel.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.deploy, "_blank")}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;