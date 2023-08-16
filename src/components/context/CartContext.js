import { createContext, useState } from "react";

export const CartContext = createContext();

export const Carrito = ( props) =>{

    const[carrito, setCarrito] = useState([]);
    console.log(carrito)
    


    const addItem = (item, quantity) => {

        if(!isIncart(item.id)){
            setCarrito(elem => [...elem, {...item, quantity},])
        }else{
            carrito.map(elem => elem.id === item.id && elem.quantity + quantity <= elem.stock ? elem.quantity = elem.quantity + quantity : console.log("NO HAY STOCK"))
            setCarrito(carrito)



        }
    }
    const removeItem = (itemId) => {
        setCarrito(carrito.filter(elem => elem.id !== itemId))
    }
    const clear = () => {
        
        setCarrito([])
    }
    const isIncart = (itemId) => {
        return carrito.some(elem => elem.id === itemId)
    }
    return (
        <CartContext.Provider value={{carrito, addItem, removeItem, clear}}>
            {props.children}
        </CartContext.Provider>
    )
}