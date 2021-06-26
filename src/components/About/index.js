import React from "react";
import { Carousel, Card, Container, Row, Col, Button, Image } from 'react-bootstrap'
import TabletAbout from '../../assets/images/about/tablet-about.png'
import Footer from '../Footer'

const About = () => {

  const handleAboutModal = () => {

  }

  return (
    
      <div className='about'>
        <Container>
          <Card style={{ width: '65rem' }}>
            <Image className='head-about-image' src={TabletAbout} fluid />
            <Card.Body>
              <Card.Title>Breacher X Files</Card.Title>
              <Card.Text>
                <p>Breacher X Files is the only database of its kind which provides
                  tactical explosive breachers with the ability to collect, retrieve,
                  and share all their historical breaching data in a secure and real
                  time manner. Breacher X Files fulfills one of the greatest
                  operational needs of all breachers, the ability to utilize the
                  valuable collective experience of their team at any time or place
                  thereby facilitating more accurate and legally defendable
                  decisions to accomplish their mission objectives.
                </p>
                <br></br>

                <p>
                  Designed and created by tactical explosive breachers with
                  extensive operational experience, Breacher X Files is more than
                  just a simple App. It is a true, all-encompassing, fully
                  searchable database providing breachers with the ability to:
                </p>

                <p>
                  <ul>
                    <li>Efficiently document operational and training reports;
                      including high-resolution pictures of breach results</li>
                    <li>Store all historic breaching data in a one centralized
                      location.</li>
                    <li>Accurately collect charge load and target analysis data.</li>
                    <li>Efficiently document operational and training reports;
                      including high-resolution pictures of breach results.</li>
                    <li>Synchronize data providing increased information sharing
                      among tactical explosive breachers’ and supervisors.</li>
                    <li>Securely retrieve breaching reports, pictures, load data,
                      target analysis data, from a licensed mobile device; with or
                      without cellular service.</li>
                    <li>Search any data field of a breaching report, including, but
                      not limited to:</li>

                    <ul>
                      <li className='indent-list'>Charge description.</li>
                      <li className='indent-list'>Charge construction and configuration.</li>
                      <li className='indent-list'>Breach details, results and notes pertaining to
                        specific charge types, targets and missions.</li>
                      <li className='indent-list'>Historical data of various charges, both during
                        training and operation use.</li>
                    </ul>

                    <li>Produce consistent, legible and professional breaching
                      reports.</li>
                    <li>Ensure transparency within a breaching program.</li>
                  </ul>
                </p>

              </Card.Text>
            </Card.Body>
          </Card>
          <Footer />
        </Container>
      </div>
  )
};

export default About;
