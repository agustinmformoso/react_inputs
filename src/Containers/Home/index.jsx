import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';

const Home = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col md={4} xs={12} className="col1">
                    <div>hola</div>
                </Col>
                <Col md={4} xs={12} className="col2">
                    <div>hola</div>
                </Col>
                <Col md={4} xs={12} className="col3">
                    <div>hola</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;