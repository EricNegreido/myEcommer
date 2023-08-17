import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { CartContext } from './context/CartContext';
export const CartWidget = () => {
    const {carrito} = useContext(CartContext)
    return (
        <>
        <Col >
        <Image style={{borderRadius : 100, width: 90}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LedJggrEI04r40yVrZD_535K-HqgRX721g&usqp=CAU" thumbnail />

        </Col>
        <Col style={{color:"#333", backgroundColor: "#fff" , borderRadius: 50, textAlign: "center"}}> {carrito.length}</Col>
        </>
    )
}
