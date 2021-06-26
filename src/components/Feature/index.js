import React from "react";
import { Container, Card, Row, Col, Image, } from 'react-bootstrap'
import Tablet from '../../assets/images/feature/tablet.png'
import Reports from '../../assets/images/feature/reports.png'
import DataModal from '../Modal/Data.js'
import SearchModal from '../Modal/Search.js'
import ReportModal from '../Modal/Report/Report'
import Footer from '../Footer'



function Feature() {

  return (
    <>      
      <div className='feature'>   
      <Container className='card-div'>
        <Card style={{ width: '65rem' }}>
      <Image className='head-image' src={Tablet} fluid /> 
        <div className='card-div'>
        <Row>
          <Col sm>
            <Card >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Document Breaching Data</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.                  
                </Card.Text>
              </Card.Body>              
              <DataModal/>              
            </Card>
          </Col>
          <Col sm>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Search Breaching Data</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <SearchModal/>
            </Card>
          </Col>
          <Col sm>
          <Card style={{ width: '18rem' }}>
            <div className='card-image-div'>
              <Card.Img variant="top" src={Reports} />
            </div>
              <Card.Body>
                <Card.Title>Professional Reporting</Card.Title>
                <Card.Text>
                Produce standardized, legible and professional breaching reports.
                </Card.Text>
              </Card.Body>
            <ReportModal/>
            </Card>
          </Col>
        </Row>
        </div>
        </Card>
      </Container>
      <div>
        <Footer/>
      </div>
      </div>
      
    </>
  )
}

export default Feature


