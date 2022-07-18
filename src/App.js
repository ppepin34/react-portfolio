import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact Me'
    },
    {
      name: 'Resume'
    }
  ]);

  function renderPage(page) {
    switch (page.name) {
      case "About Me":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Contact Me":
        return <ContactForm />
      case "Resume":
        return <Resume />
    }
  
  }

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
