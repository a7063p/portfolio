import React from "react";
import { Container, Grid, Row, Col} from 'react-bootstrap'
import runBuddy from '../../assets/images/portfolio/run-buddy.JPG'
import sayings from '../../assets/images/portfolio/sayings-from-someone.JPG'
import fitFlow from '../../assets/images/portfolio/fitness-flow.JPG'




function Portfolio() {
  return (
    <div className='port-div'>
<Container fluid="md">
  <Row>
    <Col lg={true}>
    <img src={runBuddy} className='portfolio-image' alt="Run-Buddy" />
    </Col>
    <Col lg={true}>
    <img src={sayings} className='portfolio-image' alt="Sayings From Someone" />
    </Col>
  </Row>
  {/* <Row>
    <Col lg={true}>
    <img src={fitFlow} className='portfolio-image' alt="Run-Buddy" />
    </Col>
    <Col>
    <img src={sayings} className='portfolio-image' alt="Sayings From Someone" />
    </Col>
  </Row>
  <Row>
    <Col lg={true}>
    <img src={runBuddy} className='portfolio-image' alt="Run-Buddy" />
    </Col>
    <Col lg={true}>
    <img src={sayings} className='portfolio-image' alt="Sayings From Someone" />
    </Col>    
  </Row> */}
</Container>
</div>

  )
}

export default Portfolio


