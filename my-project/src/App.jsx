import React, { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';

function App() {
  const [activeSection, setActiveSection] = useState('aboutme');

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' && activeSection !== 'aboutme') {
      scrollToSection('up');
    } else if (event.key === 'ArrowDown' && activeSection !== 'contactme') {
      scrollToSection('down');
    }
  };

  const scrollToSection = (direction) => {
    const sections = ['aboutme', 'projects', 'contactme'];
    const currentIndex = sections.indexOf(activeSection);

    let nextIndex;
    if (direction === 'up') {
      nextIndex = Math.max(0, currentIndex - 1);
    } else {
      nextIndex = Math.min(sections.length - 1, currentIndex + 1);
    }

    const nextSection = sections[nextIndex];
    setActiveSection(nextSection);

    scroller.scrollTo(nextSection, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  return (<>
  
    <div className='flex flex-col w-screen'>


      <Element name="aboutme" className="element">
        <Aboutme />
      </Element>

      <Element name="projects" className="element">
        <Projects />
      </Element>

      <Element name="contactme" className="element">
        <Contactme />
      </Element>
    </div>
  </>
  );
}

export default App;
