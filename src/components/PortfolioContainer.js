import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './Resume';
import About from './About';
import Blog from './Portfolio';
import Contact from './Contact';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />
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
