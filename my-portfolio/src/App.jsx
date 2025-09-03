import React from "react";
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
function App() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
    
  );
}
export default App; 

