import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="https://www.linkedin.com/in/sumit-kumar-4736ba2b1" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Sumit-1109" target="_blank" rel="noopener noreferrer">
            <img src="/git.png" alt="" />
          </a>
          <a href="mailto:sumitkumar2000sep@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/gmail.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@SumitKumar-d4j6m" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
