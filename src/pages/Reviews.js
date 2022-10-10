import React, { useEffect, useState} from 'react';
import {Card, Col, Container, Image, ListGroup, NavLink} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import {fetchReview} from "../http/reviewAPI";
import people from "../assets/people.svg";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStarsRating from 'react-awesome-stars-rating';

const Reviews = () => {
    const [review, setReview] = useState({classDto:{}, reviews:[]})
    const {id} = useParams()
    const [rating, setRating] = useState(0)
    useEffect(() =>{
        fetchReview(id).then(data => setReview(data))
    }, [])

    const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
        txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

    return (
        <Container className={"mt-4 "} >
            <Col className={"mr-3"}>
                <p className = {"text_4"} key={review.classDto.id}>{review.classDto.name}</p>
                <p className = {"count_classes"}> {review.classDto.countOfReviews} {sklonenie(review.classDto.countOfReviews, [' Отзыв', ' Отзыва', ' Отзывов'])}</p>
            </Col>
            <Col>
                {review.reviews.map( item =>
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
        </Container>
    );
};

export default Reviews;
