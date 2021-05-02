import React from 'react';
import APresume from '../../assets/resume/andrew-pennucci.pdf';
import { FaRegCheckCircle } from 'react-icons/fa'

function Resume() {
    const frontEnd = ['HTML','CSS','JavaScript','JQuery','Responsive Design', 'React', 'BootStrap'];
    const backEnd = ["API'S", 'Node','Express', 'MYSQL', 'Sequelize','NOSQL']
    return (
        <div className='resume-div'>            
        <h1>Resume</h1>
            <p>Download my <a href={APresume}
            style={{cusor: 'pointer'}}>resume</a></p>
        <div>
            <h5>Front End - Proficiencies</h5>
        <ul className='resume-list'>
        {frontEnd.map((lang, index) => (
            <li className='resume-li' key={index}>
                <FaRegCheckCircle 
                className=' resume-icon'/>
                {lang}
                
            </li>
        ))}
        </ul>
        </div>
        <div>
            <h5>Back End - Proficiencies</h5>
        <ul className='resume-list'>
            {backEnd.map((lang, index) => (
                <li className='resume-li' key={index}>
                <FaRegCheckCircle 
                className=' resume-icon'/>
                    {lang}
                </li>
            ))}
        </ul>
        </div>            
        </div>
    )
}

export default Resume
