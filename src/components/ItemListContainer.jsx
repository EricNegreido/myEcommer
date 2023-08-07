import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) =>{
    return (
        <>
             <Container>
                <p style={{color: "red"}}> {props.greeting}</p>    
             </Container>
        </>
    )
}