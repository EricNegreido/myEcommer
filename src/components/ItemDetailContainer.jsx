import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import data from './MOCK_DATA.json'




export const ItemDetailContainer = ({itemId}) => {
        const [item, setItem] = useState(null)
        useEffect (() => {

            const selectedItem = data.find(elem => elem.id === itemId)
            
            if(selectedItem){
                setItem(selectedItem)
            }
        }, [itemId])
        return <div>
                { <ItemDetail {...item}/>}
            </div>
            
}