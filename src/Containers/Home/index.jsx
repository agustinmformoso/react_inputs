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

    return (
        <Container fluid={true}>
            <Header />
            <Row>
                <Col md={4} xs={12} className="col1 text-center pb-3 pt-3">
                    {/* <Input label="Nombre y apellido" type="text" name="nombreyapellido"/>
                    <Input label="Teléfono" type="number" name="number"/>
                    <Input label="Mail" type="mail" name="mail"/> */}
                </Col>
                <Col md={4} xs={12} className="col2 text-center pb-3 pt-3">
                    <div>hola</div>
                </Col>
                <Col md={4} xs={12} className="col3 text-center pb-3 pt-3">
                    <Row>
                        <Col md={4} xs={12}>
                            <ButtonCustom btn_config={submitButtonSettings} />
                        </Col>
                        <Col md={4} xs={12}>
                            <ButtonCustom btn_config={clearButtonSettings} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;