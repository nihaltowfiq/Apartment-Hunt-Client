import React, { useEffect, useState } from 'react';
import './Apartments.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Apartments = () => {
    const [apartmentData, setApartmentData] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-atoll-75607.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setApartmentData(data))
    }, []);
    const history = useHistory();
    return (
        <Container>
            <h5 className="greenText text-center mt-5">House Rent</h5>
            <h2 className="darkGreenText text-center font-weight-bold">Discover the largest Rent <br /> available today</h2>
            <Row className="mt-5">
                {
                    apartmentData.map(data =>
                        <Col key={data._id} sm={4}>
                            <Card className="bg-white mb-4 card-style">
                                <Card.Img src={`data:image/png;base64,${data.image.img}`} alt="image" />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold greenText ">{data.title}</Card.Title>
                                    <Card.Text className="text-secondary"><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location}</Card.Text>
                                    <Row>
                                        <Col>
                                            <Card.Text className="text-secondary"><FontAwesomeIcon icon={faBed} /> {data.bedroom} Bedrooms</Card.Text>
                                        </Col>
                                        <Col className="text-right">
                                            <Card.Text className="text-secondary"><FontAwesomeIcon icon={faBath} /> {data.bathroom} Bathrooms</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <h2 className="font-weight-bold greenText">${data.price}</h2>
                                        </Col>
                                        <Col className="text-right">
                                            <button onClick={() => history.push(`/apartmentDetail/${data._id}`)} className="btn greenBtn">View Details</button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Apartments;