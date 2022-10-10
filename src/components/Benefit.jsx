import React from 'react';
import welcome from "../assets/services__item.svg";
import rev from "../assets/services__item_1.svg";
import best from "../assets/services__item_2.svg";
import {Button, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default function Benefit() {
    return (
        <Container style={{padding: '4vw'}}>
            <Row>
                <p className='our_plus'> Наши преимущества </p>
            </Row>

            <Row>
                <div className='div_we_are'>
                    <p className='we_are'>Мы — каталог-отзовик курсов.
                        Выбирайте курсы по отзывам, цене, <br/> продолжительности и другим критериям!</p>
                </div>
            </Row>

            <Row className='justify-content-sm-center justify-content-center' style={{padding: '3vw'}}>
                <Col className='col-7 col-sm-8 col-md-4 col-lg-4 col-xl-4'  >
                    <img src={welcome} alt="welcome"/>
                </Col>

                <Col className='col-7 col-sm-8 col-md-4 col-lg-4 col-xl-4' >
                    <img src={rev} alt="rev" />
                </Col>

                <Col className='col-7 col-sm-8 col-md-4 col-lg-4 col-xl-4'>
                    <img src={best} alt="best"/>
                </Col>
            </Row>
        </Container>
    );
}