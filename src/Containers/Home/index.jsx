import React from 'react';
import "./styles.css";
import "../../Resources/normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import Textarea from '../../Components/Textarea';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Home = () => {
    return (
       <Container fluid={true} className="Home">
           <Header />
           <Input />
           <Textarea />
           <Button />
       </Container>
    )
}

export default Home;