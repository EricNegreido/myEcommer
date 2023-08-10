import { useEffect, useState } from 'react';
import data from './MOCK_DATA.json'
import { Item } from './Item';



export const ItemList = () => {
        const [clothes, setClothes] = useState([])
        useEffect (() => {
            const promise = new Promise((resolve, rejected) => {
                setTimeout(() => resolve(data), 2000)
            })
            promise.then(data => setClothes(data))
        }, [])
        return <>
            <Item clothes={clothes}> </Item></>
}