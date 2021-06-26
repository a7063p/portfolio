import { React, useState } from 'react';
import { Modal, Button, Carousel, Container, Row, Col } from 'react-bootstrap'
import Report1 from '../../../assets/images/feature/report1.jpg'
import Report2 from '../../../assets/images/feature/report2.jpg'
import Report3 from '../../../assets/images/feature/report3.jpg'
import Report4 from '../../../assets/images/feature/report4.jpg'
import Report5 from '../../../assets/images/feature/report5.jpg'
import BXF from '../../../assets/images/header/icon.jpg'
import Operational from './Operational'
import targetAnalysis from './TargetAnalysis'
import ChargeCalculations from './ChargeCalculations'
import ChargeConstruction from './ChargeConstruction'
import HighRes from './HighRes'



function ReportModal(props) {


  const [lgShow, setLgShow] = useState(false);
  const [data, setData] = useState(Operational)

  const handleSlide = value => {

    switch (value) {
      case 0:
        setData(Operational)
        break;
      case 1:
        setData(targetAnalysis)
        break;
      case 2:
        setData(ChargeCalculations)
        break;
      case 3:
        setData(ChargeConstruction)
        break;
      case 4:
        setData(HighRes)
        break;
      default:
        setData(data);
    }
  }

  const images = [
    {
      id: "1",
      title: "Operational Details",
      src: Report1
    },
    {
      id: "2",
      title: "Target Analysis Details",
      src: Report2
    },
    {
      id: "3",
      title: "Charge Calculation Details",
      src: Report3
    },
    {
      id: "4",
      title: "Charge Construction Details",
      src: Report4
    },
    {
      id: "5",
      title: "High Resolution Images",
      src: Report5
    },
  ]

  return (
    <>
      <div className='modal-btn-div'>
        <Button onClick={() => {
          setData(Operational)
          setLgShow(true)
        }}>More Info</Button>
      </div>

      <Modal
        scrollable={true}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
      >
        <Modal.Header closeButton>
          <Container>
            <Row>
              <Col xs={2} className='modal-icon'>
                <img src={BXF} className="bxf_icon_modal" alt='BXF Logo' />
              </Col>
              <Col className="modal-header">
                <Modal.Title id="title-lg">
                  Legible and Professional Breaching Reports
                </Modal.Title>
              </Col>
            </Row>
          </Container >
        </Modal.Header>
        <Modal.Body >
          <Carousel onSlid={handleSlide}>
            {images.map((imgs, key) => (
              <Carousel.Item key={key} value={imgs.id}>
                <img className="d-sm-block w-100" src={imgs.src} alt={imgs.title} />
                <Carousel.Caption>
                  <h5>{imgs.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        {data}
      </Modal>
    </>
  );
}


export default ReportModal