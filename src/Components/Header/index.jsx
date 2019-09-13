import React from 'react';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <Row className="header">
            <Col md={12} >
                <p className="headerText">Title</p>
            </Col>
        </Row>
    )
}

export default Header;
