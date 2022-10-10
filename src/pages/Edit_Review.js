import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";

import people from "../assets/people.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
import {fetchReview, fetchReviewActive, fetchReviewProactive} from "../http/reviewAPI";
import {$authHost, $host} from "../http/index";
import {useLocation} from "react-router-dom";

const EditReview = () => {
    const location = useLocation()
    const [reviewPro, setReviewPro] = useState([])
    const [reviewAct, setReviewAct] = useState([])

    useEffect(() =>{

        fetchReviewActive().then(data => setReviewAct(data))
        fetchReviewProactive().then(data => setReviewPro(data))

    }, []);


    const handleUpdate = async (item) => {
        item.active = true;
        await $authHost.put('http://192.168.99.100:8080/api/review/admin', item);
        const postsClone = [...reviewPro];
        const index = postsClone.indexOf(item);
        postsClone[index] = { ...item };
        setReviewPro(postsClone);
        window.location.reload();

    };

    return (
        <Container className={"mt-4 mb-5"} >
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Неактивные">

            <Col>
                {reviewPro.map( item =>
                    <div className={"mt-5"}>
                        <Card className='h-100 w-100' style={{borderRadius: 25,   backgroundColor: "#4110FF"}} >
                            <Card className='h-100 w-100 mt-4 pb-4' style={{borderRadius: 25 }} border="dark" >
                                <Row className={"mt-4"}>
                                    <Col  sm={2} lg={1}>
                                        <img className={"ml-5"} style={{ width: 55, height: 55}} src={people} alt="people_img"/>
                                    </Col>
                                    <Col>
                                        <Row className = {"mt-3  name_user"}>{item.username} </Row>
                                    </Col>
                                    <Col lg={2} >
                                        <Row className = {"mt-3"}>
                                            <Col lg={1} > <FontAwesomeIcon icon={faClock} style={{color: 'gray', fontSize: '20px', marginTop: 3}}/></Col>
                                            <Col lg={9}  className = {"mt-1 text_review"}>{item.beginDate}</Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className = {"mt-3 text_review"}>
                                            <Col><ReactStarsRating  value={item.mark} isEdit={false} primaryColor={'blue'} size={20} /></Col>
                                        </Row></Col>
                                </Row>
                                <div className={"line ml-5 sm-ml-4 mb-4"}/>
                                <Row>
                                    <p className={"text_card_review"}>Достоинства</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.pluses}</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review"}>Недостатки</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.minuses}</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review"}>Комментарий</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.comment}</p>
                                </Row>
                                <Row className={"justify-content-center"}>
                                    <Button  onClick={() => handleUpdate(item)}
                                             className="btn btn-info btn-sm"
                                     style={{width:400, borderRadius: 25, backgroundColor: '#4985FF', marginTop: 20}}
                                            variant="primary">Добавить</Button>
                                </Row>
                            </Card>
                        </Card>
                    </div>
                )}
            </Col>
                </Tab>
                <Tab eventKey="profile" title="Активные">
                    <Col>
                    {reviewAct.map( item =>
                        <div className={"mt-5"}>
                            <Card className='h-100 w-100' style={{borderRadius: 25,   backgroundColor: "#4110FF"}} >
                                <Card className='h-100 w-100 mt-4 pb-4' style={{borderRadius: 25 }} border="dark" >
                                    <Row className={"mt-4"}>
                                        <Col  sm={2} lg={1}>
                                            <img className={"ml-5"} style={{ width: 55, height: 55}} src={people} alt="people_img"/>
                                        </Col>
                                        <Col>
                                            <Row className = {"mt-3  name_user"}>{item.username} </Row>
                                        </Col>
                                        <Col lg={2} >
                                            <Row className = {"mt-3"}>
                                                <Col lg={1} > <FontAwesomeIcon icon={faClock} style={{color: 'gray', fontSize: '20px', marginTop: 3}}/></Col>
                                                <Col lg={9}  className = {"mt-1 text_review"}>{item.beginDate}</Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className = {"mt-3 text_review"}>
                                                <Col><ReactStarsRating  value={item.mark} isEdit={false} primaryColor={'blue'} size={20} /></Col>
                                            </Row></Col>
                                    </Row>
                                    <div className={"line ml-5 sm-ml-4 mb-4"}/>
                                    <Row>
                                        <p className={"text_card_review"}>Достоинства</p>
                                    </Row>
                                    <Row>
                                        <p className={"text_card_review_2"}>{item.pluses}</p>
                                    </Row>
                                    <Row>
                                        <p className={"text_card_review"}>Недостатки</p>
                                    </Row>
                                    <Row>
                                        <p className={"text_card_review_2"}>{item.minuses}</p>
                                    </Row>
                                    <Row>
                                        <p className={"text_card_review"}>Комментарий</p>
                                    </Row>
                                    <Row>
                                        <p className={"text_card_review_2"}>{item.comment}</p>
                                    </Row>
                                </Card>
                            </Card>
                        </div>
                    )}
                </Col>
                </Tab>

            </Tabs>
        </Container>
    );
};

export default EditReview;
