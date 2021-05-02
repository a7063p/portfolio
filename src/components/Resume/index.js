import React from 'react'
import APresume from '../../assets/resume/andrew-pennucci.pdf'

function Resume() {
    const frontEnd = ['HTML','CSS','JavaScript','JQuery','Responsive Design', 'React', 'BootStrap'];
    const backEnd = ["API'S", 'Node','Express', 'MYSQL', 'Sequelize','NOSQL']
    return (
        <div>            
        <h1>Resume</h1>
        <p>Download my <a href={APresume}>resume</a></p>
        <div>
            <h5>Front End</h5>
        <ul>
            {frontEnd.map((lang, index) => (
                <li key={index}>
                    {lang}
                </li>
            ))}
        </ul>
        </div>
        <div>
            <h5>Back End</h5>
        <ul>
            {backEnd.map((lang, index) => (
                <li key={index}>
                    {lang}
                </li>
            ))}
        </ul>
        </div>            
        </div>
    )
}

export default Resume
