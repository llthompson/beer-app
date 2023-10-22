// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Beer({ beer, handleLikedBeer }) {

    const cardStyle = { width: '18rem' };
    const imageStyle = { maxHeight: '150px', objectFit: 'contain' }; 

    return (
        <Container fluid="sm">
            <Row xs={1} md={1} className="g-1">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card style={cardStyle}>
                            <Image src={beer.image_url} thumbnail style={imageStyle} />

                            <Card.Body>
                                <Card.Title>{beer.liked ? <Icon.EmojiHeartEyes className='gap-6' onClick={() => handleLikedBeer(beer.id)} /> : <Icon.EmojiNeutral onClick={() => handleLikedBeer(beer.id)} />}  {beer.name}
                                </Card.Title>

                                <Card.Text>
                                    {beer.tagline}
                                </Card.Text>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>ABV: {beer.abv}</ListGroup.Item>
                                <ListGroup.Item>Volume: {beer.volume.value} {beer.volume.unit}</ListGroup.Item>
                                <ListGroup.Item>Food Pairings: 
                                    <li>{beer.food_pairing[0]}</li>
                                    <li>{beer.food_pairing[1]}</li>
                                    <li>{beer.food_pairing[2]}</li>
                                    </ListGroup.Item>
                                <ListGroup.Item>Description: {beer.description}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}