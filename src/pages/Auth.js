import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false);

    const click = async (e) => {

            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }

            setValidated(true);
            user.setIsAuth(true);
            user.setIsRole(true);

            let data;
/*            if (isLogin) {
                try {
                    data = await login(username, password);
                    user.setUser(user)
                    user.setIsAuth(true)
                    if (data.sub === 'Admin') {
                        user.setIsRole(true)
                    } else {
                        user.setIsRole(false)
                    }

                    history.push(HOME_ROUTE)
                } catch (e) {
                    alert("Неверное Имя или Пароль")
                }

            } else {
                try {
                    data = await registration(username, email, password);
                    history.push(LOGIN_ROUTE)
                } catch (e) {
                    alert("Пользователь с таким именем уже существует")
                }
            }*/
        }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 ">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form  noValidate validated={validated}>
                    {isLogin ? null
                    :  <Form.Control
                            required
                            className="mt-3"
                            placeholder="Введите ваш Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />}
                    <Form.Control
                        required
                        className="mt-3"
                        placeholder="Введите ваше Имя"
                        value={username}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        required
                        className="mt-3"
                        placeholder="Введите ваш Пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink><br/>
                                В режиме "без сервера" любое нажатие "Войти" вход в админ-аккаунт" :)
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink><br/>
                                В режиме "без сервера" любое нажатие кнопки "Регистрироваться" вход в админ-аккаунт" :)
                            </div>
                        }
                        <Row className = "justify-content-center">
                        <Button
                            onClick={click}
                            className= "mt-5 mb-4 ml-5"
                            style={{backgroundColor:"#4985FF", borderRadius:25, width: 250}}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        </Row>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
