import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'



function Footer() {
    return (
        <>
            <Container className="foot">
                <Row>
                    <Col><a href='https://www.breacherxfiles.com'>www.breacherXfiles.com</a></Col>
                    <Col xs={6}>{'\u00A9'} 2021 Breacher X Files </Col>
                    <Col><a target='_blank' rel="noreferrer" href='https://www.globalassetsintegrated.com/'>A Division Of {'\u00A9'} 2021 Global Assets Integrated</a></Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
