import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './Resume';
import About from './About';
import Feature from './Feature';
import Contact from './Contact';
import Home from './Home';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');
  

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {
      case 'Home':
        return <Home/>
      case 'About':
        return <About />;
      case 'Features':
        return <Feature />;
      case 'Contact':
        return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {renderPage()}
    </div>
   
    </div>
  );
}

export default Portfolio;
