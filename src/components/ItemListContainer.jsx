import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';

export const ItemListContainer = (props) =>{
    return (
        <>
             <Container>
                <p style={{color: "red"}}> {props.greeting}</p>    
                <ItemCount></ItemCount>
             </Container>
        </>
    )
}