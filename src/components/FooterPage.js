import React from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import logo from "../assets/Лого.svg";

const FooterPage = () => {
    return (
        <Container fluid style={{backgroundColor:'white', color: '#2E2E2E'}}>
            <Row style={{paddingLeft:'25vw', paddingRight: '10vw', paddingBottom:'30px', paddingTop: '35px'}}>
                <Col style={{paddingLeft:'0', paddingRight: '15vw'}}>
                    <p className="footer_email"> itreviews@gmail.com</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-12' style={{paddingLeft:'25vw', paddingRight: '25vw'}}>
                    <hr  style={{color: '#2E2E2E', backgroundColor: '#2E2E2E', height: 1, borderColor : '#2E2E2E'}}/>
                </Col>
            </Row>
        </Container>
    );
}
export default FooterPage;
