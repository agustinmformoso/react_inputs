import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import Textarea from '../../Components/Textarea';
import Input from '../../Components/Input';
import ButtonCustom from '../../Components/ButtonCustom';

const Home = () => {

    const submitButtonSettings = {
        description: "Submit",
        variant: "success",
        size: "lg"
    }

    const clearButtonSettings = {
        description: "Clear",
        variant: "danger",
        size: "lg"
    }

    const handleSubmit = () => {
        console.log("handle submit")
    }

    const handleClear = () => {
        console.log("handle clear")
    }

    return (
        <Container fluid={true}>
            <Header />
            <Row>
                <Col md={4} xs={12} className="col1 pb-3 pt-3">
                    <Row>
                        <Col md={12} className="mt-2 mb-2 text-center">
                            <Input label="Nombre y apellido" type="text" name="nombreyapellido" />
                        </Col>
                        <Col md={12} className="mt-2 mb-2 text-center">
                            <Input label="Teléfono" type="number" name="number" />
                        </Col>
                        <Col md={12} className="mt-2 mb-2 text-center">
                            <Input label="Mail" type="mail" name="mail" />
                        </Col>
                        <Col md={12} className="mt-2 mb-2 text-center">
                            <Row>
                                <Col md={6} xs={6}>
                                    <Input label="Femenino" type="radio" name="femenino" />
                                </Col>
                                <Col md={6} xs={6}>
                                    <Input label="Masculino" type="radio" name="masculino" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} xs={12} className="col2 text-center pb-3 pt-3">
                    <Row>
                        <Col md={4} xs={4}>
                            <Input label="Opcion 1" type="checkbox" name="opciones" />
                        </Col>
                        <Col md={4} xs={4}>
                            <Input label="Opcion 2" type="checkbox" name="opciones" />
                        </Col>
                        <Col md={4} xs={4}>
                            <Input label="Opcion 3" type="checkbox" name="opciones" />
                        </Col>
                    
                        <Col md={12} className="mt-2 mb-2">
                            <Textarea label="Comentario" name="comentario" />
                        </Col>

                        <Col md={12}  className="mt-2 mb-2">
                            <Input label="Foto del DNI" type="file" name="fileUpload" />
                        </Col>
                    </Row>                    
                </Col>
                <Col md={4} xs={12} className="col3 text-center pb-3 pt-3">
                    <Row>
                        <Col md={12} className="mt-2 mb-2">
                            <Input label="Dirección" type="text" name="direccion" />
                        </Col>
                        <Col md={12} className="mt-2 mb-2">
                            <Input label="Código postal" type="number" name="codigopostal" />
                        </Col>
                        <Col md={12} className="mt-2 mb-2">
                            <Row>
                                <Col md={6} xs={6} >
                                    <ButtonCustom btn_config={submitButtonSettings} onClick={handleSubmit}/>
                                </Col>
                                <Col md={6} xs={6} >
                                    <ButtonCustom btn_config={clearButtonSettings} onClick={handleClear}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

export default Home;