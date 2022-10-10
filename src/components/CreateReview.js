import React from 'react';
import {Col,  Modal} from "react-bootstrap";
import Multiselect from "../Select/Multiselect";

const CreateReview = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header
                style={{backgroundColor: "#E5E5E5", height:60}} closeButton>
                <Col className="d-flex justify-content-center">
                    <Modal.Title>Оставить отзыв</Modal.Title>
                </Col>
            </Modal.Header>
            <Modal.Body>
            <Multiselect/>
            </Modal.Body>
        </Modal>
    );
};

export default CreateReview;
