import React from 'react';
import Hero from '../assets/images/header/hero.JPG'

function NavTabs(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
    <div className='header' style={{backgroundImage: `url(${Hero})`, }}> 
      <ul className="nav">    
    
      {tabs.map(tab => (
        <li  className="nav-item" key={tab}>          
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    <h1 className='head-name'>Andrew Pennucci</h1>
    </div>
  );
}

export default NavTabs;
