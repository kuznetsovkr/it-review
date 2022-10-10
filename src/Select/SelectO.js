import React, {Component, useState} from 'react';
import axios from "axios";
import Select from "react-select";
import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Rating from "@material-ui/lab/Rating";

export default class SelectO extends Component{
    constructor(props) {
        super(props);
        this.state={
            beginDate: '',
            endDate: '',
            minuses: '',
            pluses: '',
            comment: '',
            mentor: false,
            employed: false,
            date: '',
            mark: 0,
            temp_rating: null,
            userId: 1,
            classId: 1,
            validated: false,
            selectedOptions: [],

        }
        this.onSubmit=this.handleSubmit.bind(this);

    }

    async getOptions() {
        const response = await axios.get('http://192.168.99.100:8080/api/class/admin')
        const data = response.data
        const options = data.map(d => ({
                "value": d.id,
                "label": d.name
            })
        )

        this.setState({selectedOptions: options})
    }


    componentDidMount() {
        this.getOptions()

    }

    handleInputChange(e){
        this.setState({value: e.value})
    }

    handleInputCForm = (e) =>{

        let{name, value, type, checked} = e.target
        if (type === 'checkbox') {
            value = checked
        }
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        let now = new Date().toLocaleDateString();;
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
           const info = {beginDate: this.state.beginDate, endDate: this.state.endDate, minuses: this.state.minuses,
            pluses: this.state.pluses, comment: this.state.comment, mentor: this.state.mentor,
            employed: this.state.employed, date: now, mark:  Number(this.state.mark), classId: this.state.value, userId: this.state.userId}
        fetch('http://192.168.99.100:8080/api/review', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        }).then(() =>{
            console.log(info)
        })
    }

    render() {
        const { beginDate, endDate, minuses, pluses, comment, mentor, employed, mark} = this.state
        return (
            <Form  onSubmit={this.onSubmit}>
                <Select
                    placeholder="Введите название курса"
                    options={this.state.selectedOptions}
                    onChange ={(e) => this.handleInputChange(e)}
                />
                <Col className={"mt-3 d-flex justify-content-center"}>Период прохождения курса</Col>
                <Row>
                    <Col>
                        <Form.Control
                            style={{borderRadius: 5, borderColor: "lightgray", backgroundImage: "none", width: 190}}
                            name={"beginDate"}
                            value={beginDate}
                            onChange ={this.handleInputCForm}
                            className={"mt-2"}
                            placeholder={"От"}
                            type={"date"}

                        />
                    </Col>
                    <Col className={" mt-3 ml-2"}>—</Col>
                    <Col>
                        <Form.Control
                            style={{borderRadius: 5, borderColor: "lightgray", backgroundImage: "none", marginRight: 18, }}
                            name={"endDate"}
                            value={endDate}
                            onChange ={this.handleInputCForm}
                            className={" mt-2"}
                            placeholder={""}
                            type={"date"}
                        />
                    </Col>
                </Row>

                <Col className={"mt-3 d-flex justify-content-center"}> Достоинства</Col>
                <Row >
                    <Form.Group >
                        <Form.Control
                            name={"pluses"}
                            value={pluses}
                            onChange ={this.handleInputCForm}
                            type="text"
                            as="textarea" rows={3}
                        />
                    </Form.Group>
                </Row>
                <Col className={"mt-3 d-flex justify-content-center"}> Недостатки</Col>
                <Row>
                    <Form.Group >
                        <Form.Control
                            name={"minuses"}
                            value={minuses}
                            onChange ={this.handleInputCForm}
                            type="text"
                            as="textarea" rows={3}
                        />
                    </Form.Group>
                </Row>
                <Col className={"mt-3 d-flex justify-content-center"}> Комментарий</Col>
                <Row>
                    <Form.Group >
                        <Form.Control
                            name={"comment"}
                            value={comment}
                            onChange ={this.handleInputCForm}
                            type="text"
                            as="textarea" rows={3}
                        />
                    </Form.Group>
                </Row>
                <Row className={"mt-2 ml-5" }>
                    <Col>
                        <Form.Check
                            name={"employed"}
                            chacked={employed}
                            onChange ={this.handleInputCForm}
                            style={{}}
                            className={"mt-2"}
                            type={"checkbox"}
                            label={"Нашёл работу"}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            name = "mentor"
                            checked={mentor}
                            onChange ={this.handleInputCForm}
                            style={{color: "#212529"}}
                            className={"mt-2"}
                            type="checkbox"
                            label={"Был ментр"}

                        />
                    </Col>
                </Row>
                <Col className="d-flex justify-content-center mt-4 ml-3">
                <FormControlLabel
                    control={
                        <Rating
                            required
                            value={mark}
                            name="mark"
                            precision={1}
                            size="large"
                            fillColor='blue'
                            emptyColor='gray'
                            onChange ={this.handleInputCForm}
                        />
                    }
                    label= {mark}
                    />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button type="submit" style={{width:200, borderRadius: 25, backgroundColor: '#4985FF', marginTop: 20}}
                            variant="primary">Отправить</Button>
                </Col>
            </Form>

        );
    }
}

