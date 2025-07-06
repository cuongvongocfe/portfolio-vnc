import './App.css';
import React, { useState } from 'react';

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Credits from './components/Credits/Credits';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <div data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Sidebar></Sidebar>
      <main className="main">
        <Home toggleTheme={toggleTheme}></Home>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Skill></Skill>
        <Contact></Contact>
      </main>
      <footer className='footer'>
        <Credits></Credits>
      </footer>
    </div>
  );
}

export default App;
