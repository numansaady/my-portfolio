import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Service from "../Service/Service";
import Footer from "../Shear/Footer/Footer";
import Menubar from "../Shear/Menubar/Menubar";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Menubar />
      <Hero />
      <AboutMe />
      <Resume />
      <Portfolio />
      <Service />
      <Testimonial />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
