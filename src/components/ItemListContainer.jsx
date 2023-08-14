import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';


export const ItemListContainer = (props) => {

    return (
        <>
             <Container>
                <p style={{color: "red"}}> {props.greeting}</p>    
                <ItemList></ItemList>
                
             </Container>
        </>
    )
}