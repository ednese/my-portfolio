import React from 'react';

// import components
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
