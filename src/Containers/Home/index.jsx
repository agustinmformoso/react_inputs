import React from 'react';
import "./styles.css";
import "../../Resources/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../../Components/Input';

const Home = () => {
    return (
       <Container fluid={true} className="Home">
           <Input type="email" />
       </Container>
    )
}

export default Home;