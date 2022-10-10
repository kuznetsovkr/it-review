import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {EDIT_COURSES, EDIT_REVIEW, EDIT_SCHOOLS} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Admin = () => {

    const history = useHistory()

    return (
        <Container className="d-flex flex-column">

            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => history.push(EDIT_COURSES)}>
                Редактировать курсы
            </Button>

            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => history.push(EDIT_SCHOOLS)}>
                Редактировать школы
            </Button>

            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => history.push(EDIT_REVIEW)}>
                Отзывы
            </Button>
        </Container>
    );
};

export default Admin;
