import React, {Component} from 'react';
import Select from "react-select";
import {Col, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {$authHost} from "../http";

export default class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            term: 0,
            price: 0,
            description: '',
            linkTag: '',
            iconTag: '',
            academyId: 1,
            categoryId: 1,
            selectedOptionsCategori: [],
            selectedOptionsAcademy: [],

        }
        this.onSubmit=this.handleSubmit.bind(this);
    }

    validate = () => {
        let nameError = "";
        let termError: "";
        let priceError: "";
        let descriptionError: "";
        let linkError: "";
        let iconError: "";
        let selectError: "";

        if (!this.state.name ) {
            nameError = "Заполните поле";
        }
        if (!this.state.term) {
            termError = "Заполните поле";
        }
        if (!this.state.price) {
            priceError = "Заполните поле";
        }
        if (!this.state.description) {
            descriptionError = "Заполните поле";
        }
        if (!this.state.linkTag) {
            linkError = "Заполните поле";
        }
        if (!this.state.iconTag) {
            iconError = "Заполните поле";
        }
        if (!this.state.val ) {
            selectError = "Заполните поле";
        }

        if (nameError || termError ||  priceError || descriptionError || linkError || iconError || selectError) {
            this.setState({ nameError, linkError, iconError , selectError, termError, priceError, descriptionError});
            return false;
        }

        return true;
    };

    async getOptionsCategori() {
        const response = await $authHost.get('http://192.168.99.100:8080/api/category/admin')
        const data = response.data

        const optionsC = data.map(d => ({
                "value": d.id,
                "label": d.name
            })
        )

        this.setState({selectedOptionsCategori: optionsC})
    }
    async getOptionsAcademy () {
        const response = await $authHost.get('http://192.168.99.100:8080/api/academy/admin')
        const data = response.data

        const optionsA = data.map(d => ({
                "value": d.id,
                "label": d.name
            })
        )

        this.setState({selectedOptionsAcademy: optionsA})
    }

    handleInputChange(e){
        this.setState({val: e.value})
    }
    handleInputChangeAca(e){
        this.setState({value: e.value})
    }

    handleInputCForm = (e) =>{
        let{name, value} = e.target
        this.setState({[name]: value})
    }

    componentDidMount() {
        this.getOptionsAcademy()
        this.getOptionsCategori()

    }
    handleSubmit(e)  {

        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(this.state)
            const info = {
                name: this.state.name,
                term:  Number(this.state.term),
                price:  Number(this.state.price),
                description: this.state.description,
                linkTag: this.state.linkTag,
                iconTag: this.state.iconTag,
                academyId: this.state.value,
                categoryId: this.state.val
            }
            $authHost.post(`http://192.168.99.100:8080/api/class/admin`, info)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    window.location.reload();
                })
        }
    }

    render() {
        const {name, term, price, description, linkTag, iconTag} = this.state
        return(
            <Form  style={{padding: '10px'}} >
                <Row>
                    <p style={{fontWeight: 600, fontSize: "calc(1rem + 0.5vw)"}}>Добавление курса</p>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input type="text" name="name"
                           value={name}
                           onChange ={this.handleInputCForm}
                           placeholder="Введите название курса" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.nameError}
                    </div>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input
                        name="term"
                        value={term}
                        onChange ={this.handleInputCForm}
                        placeholder="Введите продолжительность курса" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.termError}
                    </div>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input
                        name="price"
                        value={price}
                        onChange ={this.handleInputCForm}
                        placeholder="Введите стоимость курса" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.priceError}
                    </div>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input name={"description"}
                           value={description}
                           onChange ={this.handleInputCForm}
                           placeholder="Введите описание курса" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.descriptionError}
                    </div>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input
                        name="linkTag"
                        value={linkTag}
                        onChange ={this.handleInputCForm}
                        placeholder="Поле для ссылки на курс" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.linkError}
                    </div>
                </Row>
                <Row className="mb-3" style={{paddingLeft:"12px"}}>
                    <input  name="iconTag"
                            value={iconTag}
                            onChange ={(e) => this.handleInputCForm(e)}
                            placeholder="Введите ссылку на иконку" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.iconError}
                    </div>
                </Row>

                <div className='select'>
                    <Row style={{maxWidth:"53%", marginBottom: 20}}>
                    <Select
                        requared
                        styles={this.customStyles}
                        placeholder="Введите сатегорию курса"
                        options={this.state.selectedOptionsCategori}
                        onChange ={(e) => this.handleInputChange(e)}
                    />
                        <div style={{ marginLeft: 10, fontSize: 12, color: "red" }}>
                            {this.state.selectError}
                        </div>
                    </Row >
                    <Row style={{maxWidth:"53%", marginBottom: 20}}>
                    <Select
                        options={this.state.selectedOptionsAcademy}
                        onChange ={(e) => this.handleInputChangeAca(e)}
                        placeholder="Введите школу курса" aria-rowcount={2}
                        width='10px'
                    />
                        <div style={{ marginLeft: 10, fontSize: 12, color: "red" }}>
                            {this.state.selectError}
                        </div>
                    </Row >

                </div>

                <Row>
                    <Col>
                        <button className="mr-3" type="submit"
                                onClick={this.onSubmit}
                                style={{backgroundColor: '#cbc3ff', border:"none",paddingBottom:2, paddingTop:2,width:"20%"}}>
                            <p style={{padding:0, margin:'3px'}}>Добавить новый курс</p>
                        </button>

                    </Col>
                </Row>
            </Form>

        )
    }


};

