import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/Pages/About/About";
// import Project from "./components/Pages/Project/Project";
import AnimatedCursor from "react-animated-cursor";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={50}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prjectDetails" element={<ProjectDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/project" element={<Project />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
