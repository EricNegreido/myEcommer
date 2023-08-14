import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ItemDetailContainer } from './ItemDetailContainer';
import { useState } from 'react';


export const Item = ({ clothes }) => {
  const[showDetails, setShowDetails] = useState(false);
  const handleDetailsClick = () => {
    setShowDetails(showDetails ? false : true)
  }
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
        <Button onClick={ handleDetailsClick}>DETALLES</Button>
        {showDetails && <ItemDetailContainer itemId={product.id}/>} 
      </Card>
  ))}</>)
}
