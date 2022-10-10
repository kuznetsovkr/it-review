import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import plus_add from "../assets/plus_80605.svg";
import AddSchool from "../forms/AddSchool";
import  {SchoolTable} from  "../table/SchoolTable";

const Edit_Schools = observer(() =>  {

    const [editingSchool, setEditingSchool] = useState(false)
    const initialFormState = { id_school: null, name: '', schoolname: '' }
    const [currentSchool, setCurrentSchool] = useState(initialFormState)

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:0, paddingLeft:15, paddingRight:15}}>
                    <Row>
                        {editingSchool ? (
                            <div>
                                <AddSchool  setEditingSchool={setEditingSchool} />
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end" style={{paddingRight:50}}>
                        <img src={plus_add} onClick={() => {setEditingSchool(true)}}
                             style={{width:35,padding:0, cursor:"pointer", marginBottom:'20px'}}/>
                    </Row>
                    <Row>

                        <SchoolTable  />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Schools
