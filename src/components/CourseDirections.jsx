import React, {useContext} from 'react';
import play from "../assets/premium-icon-game-control-4315514 1.svg";
import language from "../assets/premium-icon-programming-language-1723208  1.svg";
import frame from "../assets/free-icon-framework-3524995 1.svg";
import directrions from "../assets/stacked-files 1.svg";
import {Card, Carousel, Col, Container, NavLink} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {COURSE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const getFram = ( section , history ) => {
    let content = [];
    for (let i = 0; i < 2; i++) {
        const item = section.categories[i];
        content.push(<NavLink onClick={() => history.push(COURSE_ROUTE + '/' + item.id)} key={item.id}>
            <div className="card_text mb-2">{item.name}</div>
        </NavLink>);
    }
    return content;
};

const getCategories = ( section , history ) => {
    let content = [];
    for (let i = 0; i < 3; i++) {
        const item = section.categories[i];
        content.push(<NavLink onClick={() => history.push(COURSE_ROUTE + '/' + item.id)} key={item.id}>
            <div className="card_text mb-2">{item.name}</div>
        </NavLink>);
    }
    return content;
};
const getNCategories = ( section , history ) => {
    let content = [];
    for (let i = 3; i < 6; i++) {
        const item = section.categories[i];
        content.push(<NavLink onClick={() => history.push(COURSE_ROUTE + '/' + item.id)} key={item.id}>
            <p className="card_text mb-2">{item.name}</p>
        </NavLink>);
    }
    return content;
};
const getLastCategories = ( section , history ) => {
    let content = [];
    for (let i = 7; i < 8; i++) {
        const item = section.categories[i];
        content.push(<NavLink onClick={() => history.push(COURSE_ROUTE + '/' + item.id)} key={item.id}>
            <p className="card_text mb-2">{item.name}</p>
        </NavLink>);
    }
    return content;
};

const CourseDirections = observer(() => {
    const {section} = useContext(Context)
    const history = useHistory()
    return (
        <Container style={{padding: '5vw'}}>
            <Row>
                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                {section.sections
                    .filter(section => section.section.name.includes("Игры"))
                    .map(section =>
                        <Card className='h-100 w-80  mr-md-2 align-items-center' style={{backgroundColor:"#3B1966",marginLeft: "auto",
                            marginRight:"auto",  borderRadius: 25}}>
                            <img style={{ width: 70, height: 70}} src={play} alt="play" className='card_img mt-4'/>
                            <div className='card_text_title '> {section.section.name} </div>
                            <div className='card-body'>
                                {getCategories(section, history)}
                            </div>
                        </Card>
                    )}
            </Col>

                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    {section.sections
                        .filter(section => section.section.name.includes("Языки"))
                        .map(section =>
                            <Card className='h-100 w-80 ml-md-2 align-items-center' style={{backgroundColor:"#747FE5",marginLeft: "auto",
                                marginRight:"auto",  borderRadius: 25}}>
                                <img style={{ width: 70, height: 70}} src={language} alt="language" className='card_img ' style={{ paddingTop:40}}/>
                                <div className='card_text_title '> {section.section.name} </div>
                                <div className='card-body'>
                                    <Carousel interval= {1000000} slide={false} style={{paddingLeft:50, paddingRight:50, paddingBottom: 50, paddingTop:5}} >
                                        <Carousel.Item >
                                            {getCategories(section, history)}
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            {getNCategories(section, history)}
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            {getLastCategories(section, history)}
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Card>
                        )}
                </Col>
            </Row>

            <Row>
                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    {section.sections
                        .filter(section => section.section.name.includes("Фреймворки"))
                        .map(section =>
                            <Card className='h-100 w-80  mr-md-2 align-items-center' style={{backgroundColor:"#373592",marginLeft: "auto",
                                marginRight:"auto",  borderRadius: 25}}>
                                <img style={{ width: 70, height: 70}} src={frame} alt="play" className='card_img mt-2'/>
                                <div className='card_text_title '> {section.section.name} </div>
                                <div className='card-body'>
                                    {getFram(section, history)}
                                </div>
                            </Card>
                        )}
                </Col>

                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    {section.sections
                        .filter(section => section.section.name.includes("Направления"))
                        .map(section =>
                            <Card className='h-100 w-80 ml-md-2 align-items-center' style={{backgroundColor:"#334CD0",marginLeft: "auto",
                                marginRight:"auto",  borderRadius: 25}}>
                                <img style={{ width: 70, height: 70}} src={directrions} alt="directrions" className='card_img mt-2'/>
                                <div className='card_text_title '> {section.section.name} </div>
                                <div className='card-body'>
                                    <Carousel interval= {1000000} slide={false} style={{paddingLeft:40, paddingRight:50, paddingBottom: 50, paddingTop:20}} >
                                        <Carousel.Item>
                                            {getCategories(section, history)}
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            {getNCategories(section, history)}
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Card>
                        )}
                </Col>
            </Row>
        </Container>
    );
});

export default CourseDirections;
