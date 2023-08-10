import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Item = ({ clothes }) => {
    return (
      <>
        {clothes.map(product => (
        <Card key={product.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://a-static.besthdwallpaper.com/one-piece-monkey-d-luffy-gear-5-awakening-joy-boy-wallpaper-1440x1080-95711_22.jpg" />
      <Card.Body>
        <Card.Title>{product.producto}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  ))}</>)
}
