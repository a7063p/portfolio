import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Home = () => {

    return (
        <div className='home_div'>
            <div className='home'>
                <Container>                    
                    <Row>
                        <Col sm={8}>
                        <h1 className='head-title'>Breacher X Files</h1>
                        </Col>                        
                    </Row>
                    <Row collapseOnSelect expand="xl">
                    <Col sm={2} className='head-slogan'>Responsible</Col>        
                    <Col sm={2} className='head-slogan'>Effective</Col>        
                    <Col sm={2} className='head-slogan'>Professional</Col>                        
                    </Row>                    
                </Container>

            </div>
        </div>
    )

}

export default Home