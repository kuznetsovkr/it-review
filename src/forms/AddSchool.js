import React, {Component} from 'react'
import {Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
import {$authHost, $host} from "../http/index";

export default class School extends Component{


    constructor(props) {
        super(props);

        this.state= {
            name: "",
            linkTag: '',
            iconTag: '',
            value: [],
            selectedOptionsCategori: [],
        }

        this.onSubmit=this.handleSubmit.bind(this);
    }

    handleInputCForm = (e) =>{
        let{name, value} = e.target
        this.setState({[name]: value})
    }

    validate = () => {
        let nameError = "";
        let linkError: "";
        let iconError: "";
        let selectError: "";

        if (!this.state.name ) {
            nameError = "Заполните поле";
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

        if (nameError || linkError || iconError || selectError) {
            this.setState({ nameError, linkError, iconError , selectError});
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
    handleInputChange(e){
        this.setState({val: Array.isArray(e) ? e.map(x => x.value) : []})
    }


    componentDidMount() {
        this.getOptionsCategori()
    }
    refreshPage() {

    }


    handleSubmit(e)  {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(this.state)
            const info = {
                name: this.state.name,
                linkTag: this.state.linkTag,
                iconTag: this.state.iconTag,
                categories: this.state.val
            }
            $authHost.post(`http://192.168.99.100:8080/api/academy/admin`,  info )
                .then(res => {
                    window.location.reload();
                })

        }
    }
    render() {
        const {name, linkTag, iconTag} = this.state
    return (
        <form  style={{padding: '10px'}}  >
            <Row>
                <p style={{fontWeight: 600, fontSize: "calc(1rem + 0.5vw)"}}>Добавление школы</p>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text" name="name"
                       value={name}
                       onChange ={this.handleInputCForm}
                       placeholder="Введите название школы" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.nameError}
                </div>
            </Row>

            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input  name="linkTag"
                        value={linkTag}
                        onChange ={this.handleInputCForm}
                       placeholder="Поле для ссылки на школу" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}} />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.linkError}
                </div>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input  name="iconTag"
                        required
                        value={iconTag}
                        onChange ={(e) => this.handleInputCForm(e)}
                       placeholder="Поле для ссылки на иконку" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.iconError}
                </div>
            </Row>
            <div className='select'>
                <Row style={{maxWidth: "53%", marginBottom: 20}}>
                    <Select
                        isMulti
                        required
                        isClearable
                        placeholder="Введите категории курса"
                        options={this.state.selectedOptionsCategori}
                        onChange ={(e) => this.handleInputChange(e)}
                    />
                    <div style={{ marginLeft: 10, fontSize: 12, color: "red" }}>
                        {this.state.selectError}
                    </div>

                </Row>
            </div>
            <Row>
                <Col>
                    <button className="mr-3" type="submit"
                            onClick={this.onSubmit}
                            style={{backgroundColor: '#cbc3ff', border:"none",paddingBottom:2, paddingTop:2,width:"29%"}}>
                        <p style={{padding:0, margin:'3px'}}>Добавить новую школу</p>
                    </button>

                </Col>
            </Row>
        </form>

    )
}
}
