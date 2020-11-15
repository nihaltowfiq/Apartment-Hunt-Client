import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import serviceImg1 from '../../../logos/service1.png';
import serviceImg2 from '../../../logos/service2.png';
import serviceImg3 from '../../../logos/service3.png';

const services = [
    {
        name: "Wide Range of Properties",
        img: serviceImg1,
        detail: "With a robust selection of popular properties on hand, as well as leading properties from expert."
    },
    {
        name: "Financing Made Easy",
        img: serviceImg2,
        detail: "Our stress-free finance department that can find financial solutions to save your money."
    },
    {
        name: "Trusted by Thousands",
        img: serviceImg3,
        detail: "10 new offers everyday. 350 offers on site, trusted by a community of thousands of users."
    }
];

const Service = () => {
    return (
        <Container>
            <h5 className="greenText text-center mt-5">Service</h5>
            <h1 className="darkGreenText text-center">We're an agency tailored to all <br /> client's needs that always delivers</h1>
            <Row className="mt-5">
                {
                    services.map(service =>
                        <Col key={service.id} sm={4}>
                            <div className="text-center bg-light mb-4 card-style">
                                <img style={{height:"100px"}} src={service.img} alt="" />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.detail}</Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Service;