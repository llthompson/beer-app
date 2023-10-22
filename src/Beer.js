import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Beer({ beer, handleLikedBeer }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '10%'}} variant="top" src={beer.image_url} />
                <Card.Body>
                    <Card.Title>{beer.liked ? <Icon.EmojiHeartEyes className='gap-6' onClick={() => handleLikedBeer(beer.id)} /> : <Icon.EmojiNeutral onClick={() => handleLikedBeer(beer.id)} />}  {beer.name}
                    </Card.Title>

                    <Card.Text>
                        {beer.description}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>ABV: {beer.abv}</ListGroup.Item>
                    <ListGroup.Item>Volume: {beer.volume.value} {beer.volume.unit}</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>


        </>
    )
}