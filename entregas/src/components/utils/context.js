import {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        setCart([
            ...cart, //spread of previous cart
            item //new item to add
        ])
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id); //some is similar to find but returns true if it exists in the list and false if it doesn't
    }
    const howMany = (id) => {
        return isInCart(id)? cart.find((prod) => prod.id === id).counter : 0;
    }
    const cartTotalCounter = () => {
        let sum = 0;
        cart.map((prod) => sum += prod.counter);
        return sum;
    }
    const changeCartAmount = (id, amt) => {
        setCart(cart.map( (prod) => {
                if (prod.id === id) {
                    prod.counter = amt;
                }
                return prod;
            }))
    }
    const deleteFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id != id));
    }
    const clearCart = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value = {{cart, addToCart, isInCart, howMany, cartTotalCounter, changeCartAmount, deleteFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}