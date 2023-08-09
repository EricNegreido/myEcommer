import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export const ItemCount = () =>{
    const [count, setCount] = useState(0);

    const incrementar = () => setCount(count + 1)
    const decrementar = () => setCount(count - 1)


    return (
        <>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button onClick={decrementar}>-</Button> <div style={{width:40, paddingTop: 7, paddingLeft:14 }}>{count}</div> <Button onClick={incrementar}>+</Button>
            </ButtonGroup>
        </>
    );
}