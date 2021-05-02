import React from "react";
import { Container, Grid, Row, Col} from 'react-bootstrap'
import runBuddy from '../../assets/images/portfolio/run-buddy.JPG'
import sayings from '../../assets/images/portfolio/sayings-from-someone.JPG'
import fitFlow from '../../assets/images/portfolio/fitness-flow.JPG'
import noteTaker from '../../assets/images/portfolio/note-taker.JPG'
import budgetTracker from '../../assets/images/portfolio/budget-tracker.JPG'
import readMe from '../../assets/images/portfolio/readme.JPG'

import {FaGithub} from 'react-icons/fa'



function Portfolio() {
const portList =[
  {
    id: 1,
    name: 'Run Buddy',
    language: 'HTML/CSS',
    image: runBuddy,
    siteLink: 'https://a7063p.github.io/run-buddy/',
    gitLink: 'https://github.com/a7063p/run-buddy.git',
    alt: "Run Buddy"
  },
  {
    id: 2,
    name: 'Quote of the Day',
    language: "Third-Party API's",
    image: sayings,
    siteLink: 'https://emarshall121.github.io/sayings-from-someone/',
    gitLink: 'https://github.com/emarshall121/sayings-from-someone.git',
    alt: "Sayings From Someone"
  },
  {
    id: 3,
    name: 'Fitness Flow',
    language: "MySQL2",
    image: fitFlow,
    siteLink: 'https://fitnessflow.herokuapp.com/',
    gitLink: 'https://github.com/jidlebir/FitnessFlow.git',
    alt: "Fitness Flow"
  },
  {
    id: 4,
    name: 'Note Taker',
    language: "JavaScript/Express",
    image: noteTaker,
    siteLink: 'https://weekly-challenge11-note-taker.herokuapp.com/',
    gitLink: 'https://github.com/a7063p/week-11-challenge.git',
    alt: "Note Taker"
  },
  {
    id: 5,
    name: 'Budget-Tracker',
    language: "NoSQL/MongoDB",
    image: budgetTracker,
    siteLink: 'https://shielded-everglades-84342.herokuapp.com/',
    gitLink: 'https://github.com/a7063p/week-19-challenge.git',
    alt: "Budget Tracker"
  },
  {
    id: 6,
    name: 'README',
    language: "Markdown",
    image: readMe,
    siteLink: 'https://drive.google.com/file/d/11IPafuyeziyxnMC5_dBVT5fiOD6W2cJX/view',
    gitLink: 'https://github.com/a7063p/week-9-challenge.git',
    alt: "Budget Tracker"
  },
]

  return (

    <div className='port-div'>
      <h1>Portfolio</h1>
<Container fluid="md">
  <ul>    
      <Row>
      {portList.map(item => (
      <li className='port-list' key={item.id}>
        <Col lg={true}>        
          <div className='outer'>
            <img src={item.image} className='portfolio-image' alt={item.alt} />            
            <a href={item.siteLink}>
          <div className='overlay'>            
            <h4 className='text'>{item.name}</h4>
            <div>
              <h5 className='text-description'>{item.language}</h5>
            </div>
            <a href={item.gitLink}>
            <FaGithub
            className='git-circle'
            size={48} />
            </a>
          </div>
            </a>
        </div>
        </Col> 
        </li>
        ))}
      </Row>
  </ul>
</Container>
</div>

  )
}

export default Portfolio


