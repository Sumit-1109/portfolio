import Test from "./Test";
import "./app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import InfiniteMovingCard from "./components/InfiniteMovingCards/InfiniteMovingCard";
import { useRef } from "react";

const App = () => {

  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero portfolioRef = {portfolioRef} contactRef = {contactRef} />
      </section>
      

      <section id="SkillsParallax">
        <Parallax type="skills" />
      </section>


      <section id="Skills">
      <InfiniteMovingCard />
      </section>


      <section id="ServicesParallax">
        <Parallax type="services" />
      </section>


      <section id="Services">
        <Services />
      </section>


      <section id="Portfolio" ref={portfolioRef}>
  <Parallax type="portfolio" />
</section>
<Portfolio />


      <section id="Contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
};

export default App;
