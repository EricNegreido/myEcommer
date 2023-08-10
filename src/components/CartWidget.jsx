import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
export const CartWidget = () => {
    return (
        <>
        <Col xs={4} md={2} >
        <Image style={{borderRadius : 100, width: 90}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LedJggrEI04r40yVrZD_535K-HqgRX721g&usqp=CAU" thumbnail />
        <p style={{color: '#fff'}}>
            0
        </p>
        </Col>
        </>
    )
}
