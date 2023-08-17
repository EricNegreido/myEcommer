import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemCount } from './ItemCount';
import { useContext, useState } from 'react';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from './context/CartContext';



export const ItemDetail = (item) => {
  const [quantity, setQuantity] = useState(0);
  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) =>{
    setQuantity(quantity);
    addItem(item, quantity)

  }
  
  
    return (
      <>
    <Card>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>STOCK: {item.stock}</ListGroup.Item>
        <ListGroup.Item>CATEGORIA: {item.categoria}</ListGroup.Item>
        <ListGroup.Item>PRECIO: {item.precio}</ListGroup.Item>
        <ListGroup.Item> 
          {
            quantity > 0 ? ( 
              <NavLink to='/cart' className='option'> <Button> TERMINAR COMPRA </Button></NavLink>
            ) : (
              <ItemCount stock={item.stock} onAdd={handleOnAdd} />
              )
          }
          </ListGroup.Item>
            
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </>)
}