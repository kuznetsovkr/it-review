import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import men from "../assets/men.svg";
import "../style.css";
import Row from "react-bootstrap/Row";

export default function UnderHeader() {
    return (
        <Container className='uhead' fluid style={{backgroundColor:'#2E2E2E' }}>
            <Row>
                <Col className='align-self-center '>
                    <p className ='text_1'>Отзывы об IT курсах</p>
                    <p className='text_2'  >Выбирайте курсы по <br /> различным критериям!</p>
                    <a className='button_ch_dir'> <Button className='ch_dir'> <p className='text_but_under'>
                        Выбрать направление </p> </Button> </a>
                </Col>
                <Col className='d-none d-md-block'>
                    <img src={men} alt="men"/>
                </Col>
            </Row>
        </Container>
    );
}