import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';



export const Cartt = () => {

    const {carrito, removeItem, clear} = useContext(CartContext)

    const handlerClick = (id) => {
        removeItem(id)
    }

    if (carrito.length <= 0){
        return (<>
            <div> EL CARRITO ESTA VACIO </div>
        </>)
    }else{
        let total = carrito.reduce((suma, actual) =>  suma + actual.precio * actual.quantity, 0);
        
        return(<>
            
            <Container style={{background: "#333", borderRadius: 10, color: "#fff", textAlign: "center"}}>
                <Row > 
                    <Col><h2> PRODUCTO </h2></Col>
                    <Col><h2> CANTIDAD </h2></Col>
                    <Col><h2> PRECIO </h2></Col>
                    <Col><Button onClick={() => clear()} variant="outline-primary">LIMPIAR CARRITO</Button></Col>

                </Row>
                {carrito.map((elem, index) => 
                    <Row style={{marginTop:30}} key={`${elem.id}_${index}`}>          
                        <Col> <h3>{elem.producto}</h3></Col>
                        <Col><h3>{elem.quantity}</h3></Col>
                        <Col><h3>${(elem.precio * elem.quantity)}</h3></Col>
                        <Col><Button onClick={() => handlerClick(elem.id)} variant="outline-primary">Eliminar</Button></Col>

                    </Row>
                )
                }
                <Row>
                    <Col>
                    <h3>TOTAL:</h3>
                    </Col>
                    <Col> 
                        <h3> ${total} </h3></Col>
                    </Row>

                <NavLink to= '/'> 
                    <Button style={{width:"40%", marginTop: 30}}> PRODUCTOS </Button>
                
                </NavLink>
                <NavLink to='/checkout'> 
                    <Button style={{width:"40%", marginTop: 30}}> COMPRAR </Button>
                
                </NavLink>
    </Container>
        
        
        </>)
    }

  
    }