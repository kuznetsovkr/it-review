import React, {useContext} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";

const CreateCourse = ({show, onHide}) => {

    const {course} = useContext(Context)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header
                style={{backgroundColor: "#E5E5E5"}}
                closeButton>
                <Col className="d-flex justify-content-center">
                    <Modal.Title>Добавление курса</Modal.Title>
                </Col>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-3"} >
                        <Dropdown.Toggle style={{backgroundColor:"#4985FF", borderRadius: 25}}>
                            Выберите категорию
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        style={{borderRadius: 25}}
                        className={" mt-3"}
                        placeholder={"Название курса"}
                        type={""}

                    />
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <Col className="d-flex justify-content-center">
                    <Button  style={{borderRadius: 25, backgroundColor: '#4985FF'}} variant="primary">Добавить</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCourse;