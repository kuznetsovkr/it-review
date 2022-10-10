import {observer} from "mobx-react-lite";
import { Card, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import plus_add from "../assets/plus_80605.svg";
import {CourseTable} from "../table/CourseTable";
import AddCourse from "../forms/AddCourse";

const Edit_Courses = observer(() =>  {


    const [editingCourse, setEditingCourse] = useState(false)

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:0, paddingLeft:15, paddingRight:15}}>
                    <Row>
                        {editingCourse ? (
                            <div>
                                <AddCourse/>
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end" style={{paddingRight:50}}>
                        <img src={plus_add} onClick={() => {setEditingCourse(true)}}
                             style={{width:35,padding:0, cursor:"pointer", marginBottom:'20px'}}/>
                    </Row>
                    <Row>

                        <CourseTable  />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Courses
