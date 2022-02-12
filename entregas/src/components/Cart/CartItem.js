import { useContext } from "react";
import { CartContext } from "../utils/CartContext";

export const CartItem = ({prod}) => {
    const {id, singular, plural, counter, price} = prod;

    const {deleteFromCart} = useContext(CartContext);

    const deleteFromCartHandler = () => {
        deleteFromCart(id);
    }

    return(
        <>
            <h3>{counter > 1? plural: singular}</h3>
            <p>{counter}</p>
            <p><b>Costo Total: {counter*price}</b></p>
            <button onClick={deleteFromCartHandler}>Eliminar</button>
        </>
    )
}