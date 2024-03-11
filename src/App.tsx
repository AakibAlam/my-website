import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
