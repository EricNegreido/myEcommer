import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
// import data from './MOCK_DATA.json'
import {getDoc, getFirestore, doc} from "firebase/firestore";






export const ItemDetailContainer = ({itemId}) => {
        const [item, setItem] = useState(null)
        useEffect (() => {
            const db = getFirestore();
            const ropa = doc(db, "clothes", itemId);
            getDoc(ropa).then((snapshot) => {
                if(snapshot.exists()){
                    setItem({id: itemId, ...snapshot.data()});
                }
            })

            // const selectedItem = data.find(elem => elem.id === itemId)
            
            // if(selectedItem){
            //     setItem(selectedItem)
            // }
        }, [itemId])
        return <div>
                { <ItemDetail {...item}/>}
            </div>
            
}