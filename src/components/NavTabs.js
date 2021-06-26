import React from 'react';

import BXF from '../assets/images/header/icon.jpg'
import { Navbar, Nav } from 'react-bootstrap'


function NavTabs(props) {
  const tabs = ['About', 'Features', 'Contact'];
  let home = 'Home'
  return (
    <>
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <div className='icon-container-size'>
          <Navbar.Brand
          className="icon-container"
            href={'#' + home.toLowerCase()}
            onClick={() => props.handlePageChange(home)}
          >
            <img src={BXF} className="bxf_icon" />
          </Navbar.Brand>
          </div>
        

          <div className='nav-link-div'>
          <Nav>          
            {tabs.map(tab => (
              <Nav.Link
                key={tab}
                className='nav-link'                
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
              >
                {tab}
              </Nav.Link>
            ))
            }
            
          </Nav>
          </div>
          
        
      </Navbar>
    </>
  );
};


export default NavTabs;
