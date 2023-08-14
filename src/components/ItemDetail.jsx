import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemCount } from './ItemCount';

export const ItemDetail = (item) => {
    return (
      <>
    <Card>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>STOCK: {item.stock}</ListGroup.Item>
        <ListGroup.Item>CATEGORIA: {item.categoria}</ListGroup.Item>
        <ListGroup.Item>PRECIO: {item.precio}</ListGroup.Item>
        <ListGroup.Item> <ItemCount /></ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </>)
}