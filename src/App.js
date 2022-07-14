import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Hero />]}/>
          <Route path="/plans" element={<Plans />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Join />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
