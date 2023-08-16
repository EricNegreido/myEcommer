import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { useEffect, useState } from 'react';
import data from './MOCK_DATA.json'


export const ItemListContainer = (props) => {

    const [clothes, setClothes] = useState([])
    const {id} = useParams();
    useEffect (() => {
        const promise = new Promise((resolve, rejected) => {
            setTimeout(() => resolve(data), 2000)
        })
        promise.then(data => {
            if(id){
                setClothes(
                    data.filter(item => item.categoria === id)
                )
            }else{
                setClothes(data)
            }
        })
    }, [id])
    return(
    <Container>
       <p style={{color: "red"}}> {props.greeting}</p>  
       {clothes.length === 0 ? <div> LOADING... </div> : <ItemList clothes={clothes} />}
       
    </Container>)

}