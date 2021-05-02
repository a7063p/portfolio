
import { FaStackOverflow, FaGithub, FaLinkedin  } from "react-icons/fa";

import React from 'react'

function FooterTemp() {
    return (
        <div >
            <div className='foot'>
                <a href={'https://github.com/a7063p/'} >
                <FaGithub
                className='footer-icon' 
                 size={30}
                 cursor='pointer'/>
                 
                 </a>
                 <a href={'https://linkedin.com/in/andrew-pennucci-23ab5815a'}>
                <FaLinkedin
                className='footer-icon'
                size={30}/>
                </a> 
                 <a href={'https://https://stackoverflow.com/'}>
                <FaStackOverflow
                className='footer-icon'
                size={30}/>
                </a>
             
              
                
            </div>
            
          
        </div>
    )
}

export default FooterTemp
