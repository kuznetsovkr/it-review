import React, {useContext, useState} from 'react'
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../style.css";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = ({show, onHide}) =>  {

    const {user} = useContext(Context)
    const location = useLocation()
/*    const history = useHistory()*/
    const isLogin = location.pathname === LOGIN_ROUTE
    const [validated, setValidated] = useState(false);

/*    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')*/

    const click = async () => {
            user.setUser(user)
            user.setIsAuth(true)

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header style={{backgroundColor:"#E5E5E5"}}>
                <h2 className="m-auto text_3">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}  className="d-flex flex-column">
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            required
                            className="mt-3"
                            style={{ borderRadius:25}}
                            placeholder="Эл.почта"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Control
                            required
                            className="mt-3"
                            style={{ borderRadius:25}}
                            placeholder="Пароль"
                            type={"password"}
                        />
                    </Form.Group>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                       <Row className = "justify-content-center">
                           <Button type="submit" className= "mt-5 mb-4"
                                style={{backgroundColor:"#4985FF", borderRadius:25, width: 250}}
                                   onClick={click}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                       </Row>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default Auth
