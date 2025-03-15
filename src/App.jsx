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

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      
      {/* Skills Parallax */}
      <section id="SkillsParallax">
        <Parallax type="skills" />
      </section>

      {/* Skills Component - Placeholder for now */}
      <section id="Skills">
      <InfiniteMovingCard />
      </section>

      {/* Services Parallax */}
      <section id="ServicesParallax">
        <Parallax type="services" />
      </section>

      {/* Services Component */}
      <section id="Services">
        <Services />
      </section>

      {/* Portfolio Parallax */}
      <section id="Portfolio">
  <Parallax type="portfolio" />
</section>
<Portfolio />



      {/* Contact */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
